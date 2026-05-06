import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/auth.route.js";
import shipmentrouter from "./routes/shipment.route.js";

dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json());



app.use("/api/", router);
app.use("/shipment/", shipmentrouter);

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})