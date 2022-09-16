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

    //pagination recipes by 4 data each page
    findRecipesPaged: (page) => {
        return new Promise((resolve, reject) => {
            const limit = 4;
            const offset = (page - 1) * limit;

            db.query(`select * from recipes order by title limit ${limit} offset ${offset}`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //show recipe comments with pagination
    allRecipeComment: (id, page) => {
        return new Promise((resolve, reject) => {
            const limit = 2;
            const offset = (page - 1) * limit;

            db.query(`select * from comment where id_food=${id} limit ${limit} offset ${offset}`, (err, res) => {
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