import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config();
const app = express();

app.use("/", (req, res) =>{
    res.send("server is running");
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})