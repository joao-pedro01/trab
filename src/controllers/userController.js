var User = require('../models/userModel');
const jwt = require('jsonwebtoken')
var var_dump = require("var_dump");

exports.getUser = async function (req, res) {
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.create = function (req, res) {
    let user = new User(
        {
            name: req.body.name,
            age: req.body.age
        }
    );
    user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((err) => {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar usuário.` })
        })
};

exports.details = async function (req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.loginUser = (async (req, res) => {
    try {
        const user = await User.findById(req.body.id);
        if(!user) {
            return res.status(404).send({message: "Usuário não encontrado"});
        }

        console.log(user._id)
        jwt.sign(
            { usuario: {id: user._id} },
            "SECRET",
            { expiresIn: 1000 },
            (err, token) => {
              if (err) throw err
              res.status(200).json({
                  access_token: token
              })
            }
        )
    } catch (err) {
        res.status(500).json(err);
    }
});

exports.updateUser = (async (req, res) => {
    try {
        user = await User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            age: req.body.age
        });

        if(!user) {
            return res.status(404).send({message: "Usuário não encontrado!"});
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

exports.deleteUser = (async (req, res) => {
    try {
        user = await User.findByIdAndDelete(req.params.id);

        if(!user) {
            return res.status(404).send({message: "Usuário não encontrado!"});
        }

        res.status(200).json(req.user);
    } catch (err) {
        res.status(500).json(err);
    }
});