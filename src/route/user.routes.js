//declare express
const express = require("express");
const { list, detail, insert, update, destroy } = require("../controller/user.controller");

const router = express.Router();

router
.get("/user", list)
.get("/user/:email", detail)
.post("/user", insert)
.put("/user", update)
.delete("/user/:email", destroy);

module.exports = router;