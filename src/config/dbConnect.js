import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:1234@alura.4lucv9q.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;