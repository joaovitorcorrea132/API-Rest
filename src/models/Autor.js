import mongoose from "mongoose";

const autoreSchema = new mongoose.Schema(
    {
        id:{type: String},
        nome:{type: String, required: true},
        nacionalidade:{type: String},
    },
    {
        versionKey: false
    }
)

const autores = mongoose.model("autores", autoreSchema);

export default autores;