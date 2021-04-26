const express = require ("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv")
const pinRoute = require("./routes/pins")

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => console.log(err));

app.use("/api/pins", pinRoute);

app.listen(8800, () => {
    console.log("Backend Server is Running!");
})