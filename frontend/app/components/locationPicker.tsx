"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, MapPin, X } from "lucide-react";
import "leaflet/dist/leaflet.css";

type LocationData = {
  address: string;
  lat: number | null;
  lng: number | null;
};

interface LocationPickerProps {
  onLocationSelect?: (data: LocationData) => void;
}

export default function LocationPicker({
  onLocationSelect,
}: LocationPickerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);

  const suppressSearchRef = useRef(false);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  const [selected, setSelected] = useState<LocationData>({
    address: "",
    lat: null,
    lng: null,
  });

  const setQueryWithoutSearch = (value: string) => {
    suppressSearchRef.current = true;
    setQuery(value);
  };

  const commitSelection = (address: string, lat: number, lng: number) => {
    const data = { address, lat, lng };
    setSelected(data);
    onLocationSelect?.(data);
    setQueryWithoutSearch(address);
    setSuggestions([]);
  };

  const placeMarker = (lat: number, lng: number) => {
    const L = leafletRef.current;
    const map = mapInstanceRef.current;

    if (!L || !map) return;

    if (!markerRef.current) {
      markerRef.current = L.marker([lat, lng], {
        draggable: true,
      }).addTo(map);

      markerRef.current.on("dragend", async (e: any) => {
        const pos = e.target.getLatLng();

        commitSelection(
          `Lat: ${pos.lat.toFixed(6)}, Lng: ${pos.lng.toFixed(6)}`,
          pos.lat,
          pos.lng
        );

        await reverseGeocode(pos.lat, pos.lng);
      });
    } else {
      markerRef.current.setLatLng([lat, lng]);
    }

    map.setView([lat, lng], 16);
  };

  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
      );

      const data = await res.json();

      if (data?.display_name) {
        commitSelection(data.display_name, lat, lng);
      }
    } catch (error) {
      console.log("Reverse geocode failed:", error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const initMap = async () => {
      if (mapInstanceRef.current || !mapRef.current) return;

      const L = (await import("leaflet")).default;
      if (!isMounted) return;

      leafletRef.current = L;

      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current, {
        zoomControl: true,
        scrollWheelZoom: true,
      }).setView([28.6139, 77.209], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      map.on("click", async (e: any) => {
        const { lat, lng } = e.latlng;

        placeMarker(lat, lng);
        commitSelection(
          `Lat: ${lat.toFixed(6)}, Lng: ${lng.toFixed(6)}`,
          lat,
          lng
        );
        await reverseGeocode(lat, lng);
        setIsMapOpen(false);
      });

      mapInstanceRef.current = map;

      setTimeout(() => {
        map.invalidateSize();
        setMapReady(true);
      }, 200);
    };

    initMap();

    return () => {
      isMounted = false;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isMapOpen && mapInstanceRef.current) {
      setTimeout(() => {
        mapInstanceRef.current.invalidateSize();
      }, 200);
    }
  }, [isMapOpen]);

  useEffect(() => {
    if (suppressSearchRef.current) {
      suppressSearchRef.current = false;
      setSuggestions([]);
      return;
    }

    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(
            query
          )}&limit=5`
        );

        const data = await res.json();
        setSuggestions(data || []);
      } catch {
        setSuggestions([]);
      }
    }, 450);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSuggestionClick = async (item: any) => {
    const lat = Number(item.lat);
    const lng = Number(item.lon);
    const address = item.display_name;

    placeMarker(lat, lng);
    commitSelection(address, lat, lng);
    setSuggestions([]);
    setIsMapOpen(false);
  };

  return (
    <div className="w-full">
      <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-gray-900">
              Pickup / Delivery Location
            </h3>
            <p className="text-sm text-gray-500">
              Search an address or pick it from the map.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsMapOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <MapPin className="h-4 w-4" />
            Open map
          </button>
        </div>

        <div className="relative mb-4 rounded-2xl border border-gray-300 bg-white shadow-sm">
          <div className="flex items-center">
            <MapPin className="ml-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={query}
              placeholder="Search location..."
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-2xl px-3 py-4 text-black outline-none placeholder:text-gray-400"
            />
            <button
              type="button"
              onClick={() => setIsMapOpen(true)}
              className="mr-2 rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
              title="Open map"
            >
              <MapPin className="h-5 w-5" />
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-[110%] z-[9999] max-h-72 overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-2xl">
              {suggestions.map((item, index) => (
                <button
                  key={`${item.place_id}-${index}`}
                  type="button"
                  onClick={() => handleSuggestionClick(item)}
                  className="block w-full border-b border-gray-100 px-4 py-3 text-left text-sm text-gray-800 transition hover:bg-gray-50 last:border-b-0"
                >
                  <div className="line-clamp-2">{item.display_name}</div>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="grid gap-3 rounded-2xl bg-gray-50 p-4 text-sm text-gray-700 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Selected address
            </p>
            <p className="mt-1 line-clamp-2 font-medium text-gray-900">
              {selected.address || "None"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Latitude
            </p>
            <p className="mt-1 font-medium text-gray-900">
              {selected.lat ?? "-"}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Longitude
            </p>
            <p className="mt-1 font-medium text-gray-900">
              {selected.lng ?? "-"}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[99999] flex items-center justify-center p-3 transition-all duration-200 ${
          isMapOpen
            ? "visible bg-black/60 opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex w-full max-w-[96vw] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:max-w-7xl">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Select a location
              </h2>
              <p className="text-sm text-gray-500">
                Click anywhere on the map to place the marker.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsMapOpen(false)}
              className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div
              ref={mapRef}
              className="h-[78vh] w-full bg-gray-100"
            />

            {!mapReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                  <Loader2 className="h-5 w-5 animate-spin text-gray-700" />
                  <span className="text-sm font-medium text-gray-700">
                    Loading map...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}