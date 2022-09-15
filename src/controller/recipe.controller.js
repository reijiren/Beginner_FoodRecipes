// const { selectAll } = require("../model/user.model");
const recipeModel = require("../model/recipe.model");

const recipeController = {
    //method
    list: (req, res) => {
        recipeModel.selectAllRecipes()
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    detail: (req, res) => {
        const title = req.params.title;

        recipeModel.findRecipe(title)
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    insert: (req, res) => {
        const { title, ingredient } = req.body;
        recipeModel.insertRecipe(title, ingredient)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update: (req, res) => {
        const { title, ingredient } = req.body;
        recipeModel.updateRecipe(title, ingredient)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    destroy: (req, res) => {
        const title = req.params.title;
        recipeModel.deleteRecipe(title)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}

module.exports = recipeController;