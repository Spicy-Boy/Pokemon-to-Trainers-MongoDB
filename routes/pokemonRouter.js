const router = require("express").Router();

const {
    getAllPokemon,
    getOnePokemon,
    createOnePokemon,
    deleteOnePokemon,
    updateOnePokemon
} = require("../controllers/pokemonController");

router.get("/getPokemon", getAllPokemon);
router.get("/getPokemon/:name", getOnePokemon);
router.post("/createPokemon", createOnePokemon);
router.delete("/deletePokemon/:name", deleteOnePokemon);
router.put("/updatePokemon/:name", updateOnePokemon);

module.exports = router;