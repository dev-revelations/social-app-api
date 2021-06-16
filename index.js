const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// Initializing the app

const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to MongoDb...');
    }
);

// Middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



app.listen(8800, () => {
    console.log("Server is running!");
});