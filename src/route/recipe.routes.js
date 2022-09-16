//declare express
const express = require("express");
const { list, detail, insert, update, destroy, listPaged, listComment } = require("../controller/recipe.controller");

const router = express.Router();

router
.get("/recipe", list)
.get("/recipe/:page", listPaged)
.get("/recipe/:title", detail)
.get("/recipe/comment/:page", listComment)
.post("/recipe", insert)
.put("/recipe", update)
.delete("/recipe/:title", destroy);

module.exports = router;