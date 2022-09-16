//declare express
const express = require("express");
const { list, detail, insert, update, destroy, listPaged } = require("../controller/user.controller");

const router = express.Router();

router
.get("/user", list)
.get("/user/:page", listPaged)
.get("/user/:email", detail)
.post("/user", insert)
.put("/user", update)
.delete("/user/:email", destroy);

module.exports = router;