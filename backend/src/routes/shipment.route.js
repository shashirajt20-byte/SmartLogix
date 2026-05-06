import express from "express" 
import { createShipment, deleteShipment, getCustomers, getDetail, updateShipment } from "../controllers/shipments.controller.js";

const shipmentrouter = express.Router();

shipmentrouter.post("/createShipment", createShipment);
shipmentrouter.post("/updateShipment", updateShipment);
shipmentrouter.post("/getShipment", getDetail);
shipmentrouter.post("/deleteShipment", deleteShipment);
shipmentrouter.get("/getCustomers", getCustomers);

export default shipmentrouter;