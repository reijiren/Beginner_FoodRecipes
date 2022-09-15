const db = require("../config/db");

const userModel = {
    //user list ascending
    selectAllUser: () => {
        return new Promise((resolve, reject) => {
            db.query(`select * from users order by name`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //find user by email
    findUser: (email) => {
        return new Promise((resolve, reject) => {
            db.query(`select * from users where email='${email}'`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //insert new user
    insertUser: (name, email, phone, pw) => {
        return new Promise((resolve, reject) => {
            db.query(`insert into users (name, email, phone, password) values ('${name}', '${email}', '${phone}', '${pw}');`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //update user password
    resetPassword: (email, pw) => {
        return new Promise((resolve, reject) => {
            db.query(`update users set password='${pw}' where email='${email}'`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    },

    //delete user
    deleteUser: (email) => {
        return new Promise((resolve, reject) => {
            db.query(`delete from users where email='${email}'`, (err, res) => {
                if(err){
                    reject(err);
                }
                resolve(res);
            })
        })
    }
}

module.exports = userModel;