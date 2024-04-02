const Pokemon = require("../models/pokemonModel");

async function getAllPokemon(req, res)
{
    try
    {
        let results = await Pokemon.find({});

        res.json({
            message: "SUCCESS!",
            payload: results
        })
    }catch (error){
        let errorObj = {
            message: "Getting pokemon FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

async function getOnePokemon(req, res)
{
    try
    {
        let result = await Pokemon.findOne({Name: req.params.name});

        res.json({
            message: "SUCCESS!",
            payload: result
        })
    }catch (error){
        let errorObj = {
            message: "Getting single pokemon FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

module.exports = {
    getAllPokemon,
    getOnePokemon
}