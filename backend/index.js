import express from "express";
import dotenv from "dotenv";
// import { connectDB } from "./db/ConnectDb.js";
import authRoute from "./routes/auth.routes.js";
dotenv.config();

const app = express();
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.use(express.json()); // allows us to parse the body of the request
app.use("/api/auth",authRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})