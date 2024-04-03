const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const trainerSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
            unique: true
        },
        HomeTown: {
            type: String,
            required: true
        }
        // PokemonInParty: {
        //     type: [{
        //         type: ObjectId,
        //         ref: "pokemon"
        //     }]
        // }
    },
    {
        timestamps: true
    }
);

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;