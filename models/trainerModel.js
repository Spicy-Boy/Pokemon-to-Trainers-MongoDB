const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const trainerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        }
        // ,
        // ownedPokemon: {
        //     type: [{
        //         type: ObjectId,
        //         ref: "pokemons"
        //     }]
        // }
    },
    {
        timestamps: true
    }
);

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;