import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "./routes/auth.route.js";
import shipmentrouter from "./routes/shipment.route.js";
import { createServer } from "http";
import { Server } from "socket.io";


dotenv.config();
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(express.json());

const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
  console.log("User connected");
});

app.use("/api/", router);
app.use("/shipment/", shipmentrouter);

server.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})