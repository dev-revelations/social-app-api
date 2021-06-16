const express = require("express");
const mongoose = require("mongoose");
const dotenv =  require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.listen(8800, () => {
    console.log("Server is running!");
});