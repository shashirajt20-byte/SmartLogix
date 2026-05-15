
export async function liveTracking(io, socket){
    socket.on("driverLocationUpdate", async (data) => {
        try {
            const tracking = await prisms.TrackingEvent.create({
                data : {
                    vehicleId : data.vehicleId,
                    latitude : data.latitude,
                    longitude : data.longitude,
                    shipmentId : data.shipmentId,
                    timestamp : new Date(),
                }
            });
            io.emit(`shipment-${data.shipmentId}`,
                {
                    vehicleId : data.vehicleId,
                    latitude : data.latitude,
                    longitude : data.longitude,
                    timestamp : tracking.timestamp,
                    shipmentId : data.shipmentId
                }
            )
            console.log(`Live tracking updated : shipment ${data.shipmentId}`);
        } catch (error) {
            console.error("Live tracking error : ",error);
        }
    });
    socket.on("joinShipmentTracking", (shipmentId) => {
        socket.join(`shipment-${shipmentId}`);
        console.log(`User joined shipment ${shipmentId}`);
    });
    socket.on("disconnect", () => {
        console.log("user disconnected : ",socket.id);
    })
}