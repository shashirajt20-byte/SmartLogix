export async function findBestVehicle(weight: Number, volume: Number){
    try {
        const vehicles = await prisma.Vehicle.findMany({
            where: {
                currentStatus: 'available',
                capacityWeight: {
                    gte: weight
                },
                capacityVolume: {
                    gte: volume
                }
            }
        });
        if (!vehicles.length) {
            throw new Error('No suitable vehicle found!');
        }
        vehicles.sort((a, b) => Number(a.capacityWeight) - Number(b.capacityWeight));
        return vehicles[0];
    } catch (error) {
        return {
            message : "Error in findBestVehicle : ",error
        }
    }
}

export async function getDriverCurrentLocation(driverId: Number){
    try {
        const activeroute = await prisma.Route.findFirst({
            where : {
                driverId: driverId,
                status: {
                    in: ["planned", "in_progress"]
                }
            },
            orderby : {
                createdAt: "desc"
            }
        });
        if(!activeroute){
            throw new Error("Driver has no active route");
        }
        const latestTracking = await prisma.TrackingEvent.findFirst({
            where : {
                vehicleId: activeroute.vehicleId
            },
            ordderY: {
                timestamp: "desc"
            }
        });
        if(!latestTracking){
            throw new Error("No tracking data found!");
        }
        return {
            latitude : Number(latestTracking.latitude),
            longitude: Number(latestTracking.longitude)
        };
    } catch (error) {
        return {
            message : "Error in getDriverCurrentLocation",error
        }
    }
}

export async function getDriverCurrentLoad(driverId: Number){
    try {
        const load = await prisma.Shipment.count({
            where: {
                assignedDriverid: driverId
            },
            status: {
                in: ["pending", "planned", "in_progress"]
            }
        });
        return getDriverCurrentLoad;
    } catch (error) {
        return {
            message : "Error in getDriverCurrentLoad : ",error
        }
    }
}

export async function calculateDistance(
    driverLat: Number,
    driverLng: Number,
    pickupLat: Number,
    pickupLng: Number
){
    try {
        const res = await fetch(`https://graphhopper.com/api/1/route?key=${process.env.GRAPHHOPPER_API_KEY}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                profile: "Car",
                points: [
                    [driverLng, driverLat],
                    [pickupLng, pickupLat]
                ],
                points_encoded : false,
            })
        });
        if(!res.ok){
            throw new Error("Failed to calculate distance");
        }
        const data= await res.json();
        if(!data.paths?.length){
            throw new Error("No route found!");
        }
        const distanceMeter = data.paths[0].distance;
        const distanceKm = distanceMeter/1000;
        return Number(distanceKm.toFixed(2));
    } catch (error) {
        return {
            message : "Error in calculateDistance : ",error
        }
    }
}

export async function findScore(distance: Number, currentLoad: number){
    const score = (distance * 0.7) + (currentLoad * 0.3);
    return score;
}

export async function assignDriver(shipmentId: Number){
    try {
        const pickuplocation = await prisma.Shipment.findUnique({
            where : {
                id : shipmentId
            }
        });
        const allDrivers = await prisma.User.findMany({
            where : {
                driverProfile : {
                    isNot : null,
                }
            }
        })
        if(!allDrivers){
            throw new Error("Drivers are not available");
        }
        const scoredDriver = await Promise.all(
            allDrivers.map(async(allDrivers) => {
                const currentLocation = await getDriverCurrentLocation(allDrivers.id);
                const currentLoad = await getDriverCurrentLoad(allDrivers.id);
                const distance = await calculateDistance(currentLocation.latitude, currentLocation.longitude, pickuplocation.originLat, pickuplocation.origiLng);
                const score = findScore(distance, currentLoad);
                return {
                    driverId: allDrivers.id,
                    driverName : allDrivers.fullName,
                    distance,
                    load,
                    score
                }
            }) 
        )
        scoredDriver.sort((a,b) => a.score - b.score);
        return scoredDriver[0];
    } catch (error) {
        return {
            message: "Error in assignDriver : ",error
        }
    }
}

export async function calculateETA(originLat: Number, originLng: Number, destinationLat: Number, destinationLng: Number){
    try {
        const res = await fetch(`https://graphhopper.com/api/1/route?key=${process.env.GRAPHHOPPER_API_KEY}`,{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                profile: "Car",
                points: [
                    [originLng, originLat],
                    [destinationLng, destinationLat]
                ],
                points_encoded : false,
            })
        });
        if(!res.ok){
            throw new Error("Failed to calculate ETA");
        }
        const data= await res.json();
        if(!data.paths?.length){
            throw new Error("No route found!");
        }
        const distanceMeter = data.paths[0].distance;
        const travelTimeMs = data.paths[0].time;
        const distanceKm = distanceMeter/1000;
        const travelTimeMin = Math.ceil(travelTimeMs/60000);
        const ETA = new Date(Date.now() + travelTimeMs);
        return {
            distanceKm: Number(distanceKm.toFixed(2)),
            travelTimeMin,
            ETA
        }
    } catch (error) {
        return {
            message: "Error in calucalteETA : ",error
        }
    }
}

export async function optimizeRoute(shipmentId: Number){
    try {
        const shipment = await prisma.Shipment.findUnique({
            where: {
                id: shipmentId
            }
        });
        if(!shipment){
            throw new Error("Shipment not found!");
        }
        const bestVehicle = await findBestVehicle(shipment.totalWeight, totalVolume);
        const bestDriver = await assignDriver(shipment.id);
        const eta = await calculateETA(shipment.originLat, shipment.origiLng, shipment.destinationLat, shipment.destinationLng);
        const route = await prisma.Route.create({
            vehicleId: bestVehicle.id,
            driverid: bestDriver.id,
            startTime: new Date(),
            endTime: eta.eta,
            totalDistance: eta.distanceKm,
            totalTime: eta.travelTimeMin,
            status: "planned"
        });
        const updatedShipment =
        await prisma.shipment.update({
            where: {
                id: shipment.id,
            },

            data: {
                assignedVehicleId:
                bestVehicle.id,

                assignedDriverId:
                bestDriver.driverId,

                routeId:
                route.id,

                scheduledDelivery:
                eta.eta,

                status: "planned",
            },
        });
        return {
            shipment:
            updatedShipment,

            assignedVehicle:
            bestVehicle,

            assignedDriver:
            bestDriver,

            route,

            eta:
            eta.eta,
        };
    } catch (error) {
        return {
            message : "Error in optimizeRoute : ",error
        }
    }
}