const express = require("express");
const app = express();

const logger = require("morgan");
const path = require("path");

const methodOverride = require("method-override");

/*
    MIDDLEWARE
*/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

//
// ROUTES (where the user goes)
//
const viewRouter = require("./routes/viewRouter");
app.use("/", viewRouter);

// const pokemonRouter = require("./routes/pokemonRouter");
// app.use("/api/pokemon", trainerRouter);

const trainerRouter = require("./routes/trainerRouter");
app.use("/api/trainers", trainerRouter);

const pokemonRouter = require("./routes/pokemonRouter");
app.use("/api/pokemon", pokemonRouter);

/*
    APP LISTENING
*/
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);

});

//initialize mongoose shenanigans
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);
//connect to ye olde database (see .env file for database)
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
    console.log("MONGODB CONNECTED")
});

