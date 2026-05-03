import prisma from "../services/prisma.js";

export async function createShipment(req, res) {
    try {
        const {
            customerId,
            originAddress,
            destinationAddress,
            pickupDate,
            pickupTime,
            deliveryDate,
            deliveryTime,
            status,
            totalWeight,
            priority,
            serviceType,
            paymentTerms,
            insurance,
            notes,
            shipmentType,
            referenceNumber,
            warehouseId,
            cargoType,
            specialRequirements,
            totalVolume,
            totalPackages,
            vehicleId,
            driverId
        } = req.body;

        if(!customerId || !originAddress || !destinationAddress || !pickupDate || !pickupTime || !deliveryDate || !deliveryTime || !shipmentType || !totalWeight || !totalPackages){
            return res.status(400).json({
                success : false,
                message : "All fields are required"
            })
        }
        const newShipment = await prisma.Shipment.create({
            data: {
                customerId,
                originAddress,
                destinationAddress,
                scheduledPickup: new Date(
                    `${pickupDate}T${pickupTime || "00:00"}`
                ),
                scheduledDelivery: deliveryDate
                    ? new Date(`${deliveryDate}T${deliveryTime || "00:00"}`): null,
                status: "pending",
                totalWeight,
                priority,
                serviceType,
                paymentTerms,
                insurance,
                notes,
                shipmentType,
                referenceNumber,
                warehouseId,
                cargoType,
                specialRequirements,
                totalVolume,
                totalPackages: 1,
                vehicleId: assignedVehicleId,
                driverId: assignDriverId
            }
        });
        return res.status(201).json({
            succeses : true,
            message : "New shipment is created"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message ?? "Server error"
        })
    }
}

export async function updateShipment(req, res){
    try {
        const {id} = req.params;
        const {
            customerId,
            originAddress,
            destinationAddress,
            pickupDate,
            pickupTime,
            deliveryDate,
            deliveryTime,
            status,
            totalWeight,
            priority,
            serviceType,
            paymentTerms,
            insurance,
            notes,
            shipmentType,
            referenceNumber,
            warehouseId,
            cargoType,
            specialRequirements,
            totalVolume,
            totalPackages,
            vehicleId,
            driverId
        } = req.body;
        const existingShipment = await prisma.Shipment.findUnique({
            where : {id}
        });
        if(!existingShipment){
            return res.status(400).json({
                success : false,
                message : "Shipment not found"
            })
        }
        const updateshipment = await prisma.Shipment.update({
            where : {id},
            data : {
                customerId: customerId || existingShipment.customerId,
                originAddress,
                destinationAddress,
                scheduledPickup:
                pickupDate
                    ? new Date(
                        `${pickupDate}T${pickupTime || "00:00"}`
                    )
                    : existingShipment.scheduledPickup,

                scheduledDelivery: deliveryDate
                ? new Date(
                    `${deliveryDate}T${deliveryTime || "00:00"}`
                    )
                : existingShipment.scheduledDelivery,

            }
        })
    } catch (error) {
         
    }
}