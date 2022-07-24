const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const markerRoute = require("./routes/markersRoutes")
const userRoute = require("./routes/userRoutes")

dotenv.config()

const app = express();
app.use(express.json())

connectDB()

app.use("/api/markers", markerRoute)
app.use("/api/users", userRoute)

app.listen(8800, () => {
    console.log("Backend server is running on 8800!")
})