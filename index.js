//declare library
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const xss = require("xss-clean");

//buat route
const userRouter = require("./src/route/user.routes.js");
const recipeRouter = require("./src/route/recipe.routes.js")

const app = express();

try{
    app.use(helmet());
    app.use(bodyParser.json());
    app.use(xss());
    app.use(cors());
}catch(err){
    console.log(err);
}

app.use(userRouter);
app.use(recipeRouter);

//jalankan express
app.listen(process.env.PORT, () => {
    console.log("SERVICE IS RUNNING ON PORT 3001");
})