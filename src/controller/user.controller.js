// const { selectAll } = require("../model/user.model");
const userModel = require("../model/user.model");

const userController = {
    //method
    list: (req, res) => {
        userModel.selectAllUser()
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    listPaged: (req, res) => {
        const page = req.params.page;

        userModel.findUserPaged(page)
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    detail: (req, res) => {
        const email = req.params.email;

        userModel.findUser(email)
        .then((result) => {
            res.json(result.rows);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    insert: (req, res) => {
        const { name, email, phone, pw } = req.body;
        userModel.insertUser(name, email, phone, pw)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update: (req, res) => {
        const { email, pw } = req.body;
        userModel.resetPassword(email, pw)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    },
    destroy: (req, res) => {
        const email = req.params.email;
        userModel.deleteUser(email)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.json(err);
        });
    }
}

module.exports = userController;