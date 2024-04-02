const router = require("express").Router();

const {
    getHomePage,
    getTrainersPage,
    getPokemonPage,
    getOneTrainerPage,
    getOnePokemonPage,
    getCreatePokemonForm
} = require("../controllers/viewController");

router.get("/", getHomePage);

router.get("/trainers", getTrainersPage);

router.get("/pokemon", getPokemonPage);

router.get("/trainers/:name", getOneTrainerPage);

router.get("/pokemon/:name", getOnePokemonPage);

//localhost:8080/createPokemon
router.get("/createPokemon", getCreatePokemonForm);

module.exports = router;