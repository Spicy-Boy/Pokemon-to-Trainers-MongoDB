const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const pokemonSchema = new mongoose.Schema(
    {
        PokedexNo: {
            type: Number,
            unique: true,
            required: true
        },
        Name: {
            type: String,
            unique: true,
            required: true,
        },
        Type: [
            {
                type: String,
            }
        ],
        Moves: [
            {
                type: String
            }
        ],
        OwnedBy: [{
            type: ObjectId,
            ref: "trainers"
        }]
    }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;