require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const pokemon = require("./models/Pokemon");
const methodOverride = require("method-override");
const PokemonRouter = require("./controllers/pokemon");

app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/pokemon", PokemonRouter);

const PORT = 4000;
app.listen(PORT, () => console.log(`You are listening on port ${PORT}`));