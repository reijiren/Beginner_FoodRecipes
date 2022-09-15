//declare express
const express = require("express");
const { list, detail, insert, update, destroy } = require("../controller/recipe.controller");

const router = express.Router();

router
.get("/recipe", list)
.get("/recipe/:title", detail)
.post("/recipe", insert)
.put("/recipe", update)
.delete("/recipe/:title", destroy);

module.exports = router;