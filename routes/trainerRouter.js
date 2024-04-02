const router = require("express").Router();

const {
    createTrainer,
    getAllTrainers
    // getTrainersPokemon
} = require("../controllers/trainerController");

router.get("/getTrainers", getAllTrainers);

router.post("/createTrainer", createTrainer);

module.exports = router;