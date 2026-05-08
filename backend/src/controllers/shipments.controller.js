import prisma from "../services/prisma.js";

export async function createShipment(req, res) {
    try {
        const {
            customerId,
            originAddress,
            originLat,
            originLng,
            destinationAddress,
            destinationLat,
            destinationLng,
            pickupDate,
            pickupTime,
            deliveryDate,
            deliveryTime,
            // status,
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

        if(!customerId) return res.status(400).json({ success:false, message:"customerId missing" });
        if(!originAddress) return res.status(400).json({ success:false, message:"originAddress missing" });
        if(!destinationAddress) return res.status(400).json({ success:false, message:"destinationAddress missing" });
        if(!pickupDate) return res.status(400).json({ success:false, message:"pickupDate missing" });
        if(!pickupTime) return res.status(400).json({ success:false, message:"pickupTime missing" });
        if(!deliveryDate) return res.status(400).json({ success:false, message:"deliveryDate missing" });
        if(!deliveryTime) return res.status(400).json({ success:false, message:"deliveryTime missing" });
        if(!shipmentType) return res.status(400).json({ success:false, message:"shipmentType missing" });
        if(!totalWeight) return res.status(400).json({ success:false, message:"totalWeight missing" });
        if(!totalPackages) return res.status(400).json({ success:false, message:"totalPackages missing" });

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
                originLat,
                originLng,
                destinationAddress,
                destinationLat,
                destinationLng,
                scheduledPickup: new Date(
                    `${pickupDate}T${pickupTime || "00:00"}`
                ),
                scheduledDelivery: deliveryDate
                    ? new Date(`${deliveryDate}T${deliveryTime || "00:00"}`): null,
                // status: "pending",
                totalWeight,
                priority,
                serviceType,
                paymentTerms,
                insurance: insurance === "Yes",
                notes,
                shipmentType,
                referenceNumber,
                warehouseId,
                cargoType,
                specialRequirements,
                totalVolume,
                totalPackages,
                assignedVehicleId: vehicleId,
                assignedDriverId: driverId
            }
        });
        return res.status(201).json({
            success : true,
            message : "New shipment is created"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
}

export async function updateShipment(req, res){
    try {
        const {id} = req.params;
        const {
            customerId,
            originAddress,
            originLat,
            originLng,
            destinationAddress,
            destinationLat,
            destinationLng,
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
                originAddress: originAddress || existingShipment.originAddress,
                originLat: originLat || existingShipment.originLat,
                originLng: originLng || existingShipment.originLng,
                destinationAddress: destinationAddress || existingShipment.destinationAddress,
                destinationLat: destinationLat || existingShipment.destinationLat,
                destinationLng: destinationLng || existingShipment.destinationLng,
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
                status : status || existingShipment.status,
                totalWeight: totalWeight || existingShipment.totalWeight,
                priority: priority || existingShipment.priority,
                serviceType: serviceType || existingShipment.serviceType,
                paymentTerms: paymentTerms || existingShipment.paymentTerms,
                insurance: insurance || existingShipment.paymentTerms,
                notes: notes || existingShipment.notes,
                shipmentType: shipmentType || existingShipment.shipmentType,
                referenceNumber: referenceNumber || existingShipment.referenceNumber,
                warehouseId: warehouseId || existingShipment.warehouseId,
                cargoType: cargoType || existingShipment.cargoType,
                specialRequirements:
                specialRequirements || existingShipment.specialRequirements,
                totalVolume: totalVolume || existingShipment.totalVolume,
                totalPackages: totalPackages || existingShipment.totalPackages,
                vehicleId: assignedVehicleId || existingShipment.assignedVehicleId,
                driverId: assignDriverId || existingShipment.assignDriverId
            }
        });
        return res.status(200).json({
            success : true,
            message : "Shipment updated successfully"
        })
    } catch (error) {
         return res.status(500).json({
            success : false,
            message : "Internal server error"
         })
    }
}

export async function deleteShipment(req, res){
    try {
        const {id} = req.params;
        const existingShipment = await prisma.Shipment.findUnique({
            where : {id}
        });
        if(!existingShipment){
            return res.status(404).json({
                success : false,
                message : "Shipment not found"
            })
        }
        await prisma.Shipment.delete({
            where : {id}
        });
        return res.status(200).json({
            success : true,
            message : "Shipment deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal server error"
        })
    }
}

export async function getDetail(req, res){
    try {
        const {id} = req.params;
        const shipment = await prisma.Shipment.findUnique({
            where : {id},
            include: {
                customerId : true,
                originAddress: true,
                destinationAddress : true,
                scheduledPickup : true,
                scheduledDelivery : true,
                status : true,
                totalWeight : true,
                priority : true,
                serviceType : true,
                paymentTerms : true,
                insurance : true,
                notes : true,
                shipmentType : true,
                referenceNumber : true,
                warehouseId : true,
                cargoType : true,
                specialRequirements : true,
                totalVolume : true,
                totalPackages : true,
                vehicleId : true,
                driverId : true
            }
        });
        if(!shipment){
            return res.status(404).json({
                success : false,
                message : "Shipment not found"
            })
        }
        return res.status(200).json({
            success : true,
            data : shipment
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal server error"
        })
    }
}

export async function getCustomers(req, res){
    try {
        const customers = await prisma.Customer.findMany();
        // console.log(customers);
        if(!customers){
            return res.status(404).json({
                success : false,
                message : "No customer available"
            })
        }
        return res.status(200).json({
            success: true,
            data : customers
        })
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : "Internal server error"
        }) 
    }
}