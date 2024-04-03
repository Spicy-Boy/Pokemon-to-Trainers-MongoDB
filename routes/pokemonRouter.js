const router = require("express").Router();

const {
    getAllPokemon,
    getOnePokemon,
    createOnePokemon,
    deleteOnePokemon,
    updateOnePokemon,
    attachTrainerToPokemon
} = require("../controllers/pokemonController");

router.get("/getPokemon", getAllPokemon);
router.get("/getPokemon/:name", getOnePokemon);
router.post("/createPokemon", createOnePokemon);
router.delete("/deletePokemon/:name", deleteOnePokemon);
router.put("/updatePokemon/:name", updateOnePokemon);

//localhost:8080/api/pokemon/attachTrainerToPokemon/name
router.put("/attachTrainerToPokemon/:name", attachTrainerToPokemon)

module.exports = router;