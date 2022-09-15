const db = require("../config/db");

const recipeModel = {
    //recipe list ascending
    selectAllRecipes: () => {
        return new Promise((resolve, reject) => {
            db.query(`select * from recipes order by title`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //find recipe by title
    findRecipe: (title) => {
        return new Promise((resolve, reject) => {
            db.query(`select * from recipes where lower(title) like lower('%${title}%');`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //insert new recipe
    insertRecipe: (title, ingredient) => {
        return new Promise((resolve, reject) => {
            db.query(`insert into recipes (title, ingredient) values ('${title}', '${ingredient}');`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //update recipe
    updateRecipe: (title, ingredient) => {
        return new Promise((resolve, reject) => {
            db.query(`update recipes set ingredient='${ingredient}' where lower(title)=lower('${title}')`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //delete recipe
    deleteRecipe: (title) => {
        return new Promise((resolve, reject) => {
            db.query(`delete from recipes where lower(title)=lower('${title}')`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    }
}

module.exports = recipeModel;