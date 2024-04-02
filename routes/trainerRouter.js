const router = require("express").Router();

const {
    createOneTrainer,
    getAllTrainers,
    getOneTrainer
} = require("../controllers/trainerController");

router.get("/getTrainer", getAllTrainers);
router.get("/getTrainer/:name", getOneTrainer);
router.post("/createTrainer", createOneTrainer);

module.exports = router;