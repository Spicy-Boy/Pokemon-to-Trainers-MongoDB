// const Trainer = require("../models/trainerModel");
const Trainer = require("../models/trainerModel");
const Pokemon = require("../models/pokemonModel");

function getHomePage(req, res) 
{
    res.render("home");
}

async function getTrainersPage(req, res) {
    try
    {
        res.send("trainer page!");
    } 
    catch (error)
    {
        let errorObj = {
            message: "getTrainersPage failed",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

async function getPokemonPage(req,res) {
    try
    {
        let results = await Pokemon.find({});

        res.render("allPokemon", {pokemon: results});
    } 
    catch (error)
    {
        let errorObj = {
            message: "getPokemonPage failed",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

async function getOneTrainerPage(req,res) {
    
}

async function getOnePokemonPage(req,res) {
    try
    {
        let results = await Pokemon.findOne({Name: req.params.name});

        res.render("onePokemon", {pokemon: results});
    } 
    catch (error)
    {
        let errorObj = {
            message: "getOnePokemonPage failed",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

module.exports = {
    getHomePage,
    getTrainersPage,
    getPokemonPage,
    getOneTrainerPage,
    getOnePokemonPage
};