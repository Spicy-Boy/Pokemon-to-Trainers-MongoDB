const Trainer = require("../models/trainerModel");

async function getAllTrainers(req, res)
{
    try 
    {
        let results = await Trainer.find({});

        res.json({
            message: "SUCCESS!",
            payload: results
        })
    } catch (error)
    {
        let errorObj = {
            message: "Getting trainers FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

//GETS trainer by NAME
async function getOneTrainer(req, res)
{
    try
    {
        let result = await Trainer.findOne({Name: req.params.name});

        res.json({
            message: "SUCCESS!",
            payload: result
        })
    }catch (error){
        let errorObj = {
            message: "Getting single trainer FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

async function createOneTrainer(req, res)
{
    try 
    {
        let newTrainer = {
            Name: req.body.Name,
            HomeTown: req.body.HomeTown
        }

        await Trainer.create(newTrainer);

        res.json({
            message: "Creating trainer SUCCEEDED!",
            payload: newTrainer
        })
    } catch (error)
    {
        let errorObj = {
            message: "Creating trainer FAILED!",
            payload: error
        }

        console.log(errorObj);

        res.json(errorObj);
    }
}

module.exports = {
    createOneTrainer,
    getAllTrainers,
    getOneTrainer
}