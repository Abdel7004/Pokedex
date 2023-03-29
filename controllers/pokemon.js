const express = require("express");
const pokemon = require("../models/Pokemon.js");
const router = express.Router();

//index
router.get("/", (req, res) => {
  res.render("index.ejs", { pokemon });
});

//new
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

//create
router.post("/", (req, res) => {
  pokemon.push(req.body);
  res.redirect("/Pokemon");
});

//edit
router.get("/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const OnePokemon = pokemon[id];
  res.render("edit.ejs", { OnePokemon, index: id });
});

//update
router.put("/:id", (req, res) => {
  const id = req.params.id;
  pokemon[id] = req.body;
  res.redirect("/Pokemon");
});

//destroy
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pokemon.splice(id, 1);
  res.redirect("/Pokemon");
});

//show
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const OnePokemon = pokemon[id];
  res.render("show.ejs", { OnePokemon, index: id });
});

module.exports = router;