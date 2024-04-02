const router = require("express").Router();

const {
    getAllPokemon,
    getOnePokemon
} = require("../controllers/pokemonController");

router.get("/getPokemon", getAllPokemon);
router.get("/getPokemon/:name", getOnePokemon);

module.exports = router;