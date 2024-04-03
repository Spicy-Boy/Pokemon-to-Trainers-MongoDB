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
        let results = await Trainer.find({});

        res.render("allTrainers", {trainers: results});
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
    try
    {
        let results = await Trainer.findOne({Name: req.params.name});

        res.render("oneTrainer", {trainer: results});
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

function getCreatePokemonForm(req, res) {
    res.render("createPokemon");
}

async function getUpdatePokemonForm(req, res){
    try{
        let result = await Pokemon.findOne({Name: req.params.name});

        res.render("updatePokemon", {pokemon: result});
    }catch(error){
        let errorObj = {
            message: "getUpdatePokemonForm failed",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

function getCreateTrainerForm(req, res) {
    res.render("createTrainer");
}

module.exports = {
    getHomePage,
    getTrainersPage,
    getPokemonPage,
    getOneTrainerPage,
    getOnePokemonPage,
    getCreatePokemonForm,
    getUpdatePokemonForm,
    getCreateTrainerForm
};