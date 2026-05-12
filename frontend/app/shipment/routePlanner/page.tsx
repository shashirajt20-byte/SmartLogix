import LocationPicker from "@/app/components/locationPicker";
import { Fuel, IndianRupee, MapPin, OctagonMinus, Save, Sparkles, Timer } from "lucide-react";

export default function RoutePlanner(){
    return(
        <div className="bg-white flex flex-col gap-4 h-screen">
            <div className="px-5 flex flex-col gap-2 ">
                <div className="flex justify-between py-3.5">
                    <div className="flex flex-col text-black">
                        <h1 className="font-bold">Route Planner</h1>
                        <p className="text-xs">Home - Route Planner</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="border rounded place-content-center border-gray-200">
                            <button className="text-black  px-5">Reset</button>
                        </div>
                        <div className="border rounded place-content-center border-gray-200">
                            <button className="text-black px-5 flex gap-2"><Save className="size-5"/>Save Route</button>
                        </div>
                        <div className="border rounded bg-blue-800 place-content-center">
                            <button className="text-white px-5 flex gap-2"><Sparkles className="size-5" />Optimize Route</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-6 border rounded-xl border-gray-200">
                    <div>
                        <label htmlFor="" className="text-xs text-black">Select Vehicle</label>
                        <div className="border rounded border-gray-200">
                            <select name="" id="" className="w-full rounded text-black px-2.5 outline-none">
                                <option value="">ajkfjaja;</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs text-black">Select Driver</label>
                        <div className="border rounded border-gray-200">
                            <select name="" id="" className="w-full rounded text-black px-2.5 outline-none">
                                <option value="">ajkfjaja;</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs text-black">Select Start Location</label>
                        <div className="border rounded border-gray-200">
                            <LocationPicker/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs text-black">Select End Location</label>
                        <div className="border rounded border-gray-200">
                            <LocationPicker/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="text-xs text-black">Date</label>
                        <div className="border rounded border-gray-200">
                            <input className="text-black" type="Date" />
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="flex gap-2.5 px-5">
                <div className="w-60 border rounded border-gray-200 text-black">stops</div>
                <div className="flex-1 border rounded border-gray-200">map</div>
            </div>
            <div className="px-5">
                <div className="flex flex-col border rounded-xl border-gray-200 ">
                    <div className="text-black border rounded-t border-gray-200 p-1.5">Route Summary</div>
                    {/* <div> */}
                        <div className="flex justify-between p-2.5">
                            <div className="flex gap-2 px-5 place-items-center place-content-center border rounded-xl border-blue-500">
                                <div className="bg-blue-400 border rounded border-blue-400 place-content-center  h-6"><OctagonMinus className="size-4"/></div>
                                <div className="text-black flex flex-col">
                                    <p>Total Stops</p>
                                    <h2 className="font-bold">7</h2>
                                </div>
                            </div>
                            <div className="flex gap-2 px-5 place-items-center place-content-center border rounded-xl border-yellow-600">
                                <div className="bg-yellow-600 border rounded border-yellow-600 place-content-center  h-6"><MapPin className="size-4"/></div>
                                <div className="text-black flex flex-col">
                                    <p>Total Distance</p>
                                    <h2 className="font-bold">7</h2>
                                </div>
                            </div>
                            <div className="flex gap-2 px-5 place-items-center place-content-center border rounded-xl border-purple-800">
                                <div className="bg-purple-800 border rounded border-purple-800 place-content-center  h-6"><Timer className="size-4"/></div>
                                <div className="text-black flex flex-col">
                                    <p>Estimated Time</p>
                                    <h2 className="font-bold">7</h2>
                                </div>
                            </div>
                            <div className="flex gap-2 px-5 place-items-center place-content-center border rounded-xl border-green-500">
                                <div className="bg-green-500 border rounded border-green-500 place-content-center  h-6"><Fuel className="size-4"/></div>
                                <div className="text-black flex flex-col">
                                    <p>Total Fuel Cost</p>
                                    <h2 className="font-bold">7</h2>
                                </div>
                            </div>
                            <div className="flex gap-2 px-5 place-items-center place-content-center border rounded-xl border-purple-500">
                                <div className="bg-purple-500 border rounded border-purple-500 place-content-center  h-6"><IndianRupee  className="size-4"/></div>
                                <div className="text-black flex flex-col">
                                    <p>Total Cost</p>
                                    <h2 className="font-bold">7</h2>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
}