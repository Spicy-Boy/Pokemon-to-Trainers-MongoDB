const Trainer = require("../models/trainerModel");

async function getAllTrainers(req, res)
{
    try 
    {
        let results = await Trainer.find({});

        // res.render("allTrainers", {trainers: results});

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

        res.redirect(`/trainers/${newTrainer.Name}`)

        // res.json({
        //     message: "Creating trainer SUCCEEDED!",
        //     payload: newTrainer
        // })
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

async function deleteOneTrainer(req, res)
{
    try 
    {
        let newTrainer = {
            Name: req.body.Name,
            HomeTown: req.body.HomeTown
        }

        await Trainer.create(newTrainer);

        res.json({
            message: "Deleting trainer SUCCEEDED!",
            payload: newTrainer
        })
    } catch (error)
    {
        let errorObj = {
            message: "Deleting trainer FAILED!",
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

// UPDATE AND DELETE trainers ejs html 

// <!-- update button -->
// <a href="/updateTrainer/<%=trainer.Name%>">Edit this entry</a>

// <br><br>

// <!-- DELETE BUTTON vvv -->
// <form action="/api/pokemon/deleteTrainer/<%=trainer.Name%>?_method=DELETE" method="post">
//     <input type="submit" name="_method" value="DELETE THIS TRAINER">
// </form>