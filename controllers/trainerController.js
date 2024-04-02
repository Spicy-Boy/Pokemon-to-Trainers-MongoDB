const Trainer = require("../models/trainerModel");

async function getAllTrainers(req, res)
{
    try 
    {
        let results = await Trainer.find({});

        res.json({
            message: "Getting trainers SUCCEEDED!",
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

async function createTrainer(req, res)
{
    try 
    {
        await Trainer.create(req.body);

        res.json({
            message: "Creating trainer SUCCEEDED!",
            payload: results
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
    createTrainer,
    getAllTrainers
}