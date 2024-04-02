const router = require("express").Router();

const {
    getAllPokemon,
    getOnePokemon,
    createOnePokemon,
    deleteOnePokemon
} = require("../controllers/pokemonController");

router.get("/getPokemon", getAllPokemon);
router.get("/getPokemon/:name", getOnePokemon);
router.post("/createPokemon", createOnePokemon);
router.delete("/deletePokemon/:name", deleteOnePokemon);

module.exports = router;