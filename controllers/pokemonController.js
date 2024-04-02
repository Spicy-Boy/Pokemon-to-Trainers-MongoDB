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

async function createOnePokemon(req, res)
{
    try
    {
        let newPokemon = {
            PokedexNo: req.body.PokedexNo,
            Name: req.body.Name,
            Type: req.body.Type.split(", "), //SEND IN A STRING!!!! elements with comma space in between 
            Moves: req.body.Moves.split(", ")
        }

        await Pokemon.create(newPokemon);

        res.redirect(`/pokemon/${newPokemon.Name}`)

        // res.json({
        //     message: "SUCCESS!",
        //     payload: newPokemon
        // })
    }catch (error){
        let errorObj = {
            message: "Creating single pokemon FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

async function deleteOnePokemon(req, res)
{
    try
    {
        await Pokemon.deleteOne({Name: req.params.name});

        res.redirect("/pokemon");

        // res.json({
        //     message: "SUCCESS!",
        //     payload: `Deleted: ${req.params.name}`
        // })
    }catch (error){
        let errorObj = {
            message: "Deleting a single pokemon FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

module.exports = {
    getAllPokemon,
    getOnePokemon,
    createOnePokemon,
    deleteOnePokemon
}