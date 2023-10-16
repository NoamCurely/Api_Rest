const User = require('../Model/UserModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//endpoint creation de compte
const signup = async(req, res) => {
    const { firstname, lastname, email, password, role } = req.body;
    try {
        await User.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: await bcrypt.hash(password, 10),
            role: role,
        });
        return res.status(200).send({message: "User register with success"});
    } catch (error) {
        return res.status(401).send({error});
    }
};

//endpoint connexion
const sigin = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const Check = await bcrypt.compare(password, user.password);
            if (Check) {
                let token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });
                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                return token, res.status(200).send({token});
            } else {
                return res.status(401).send({error: "Login failed"});
            }
        } else {
            return res.status(401).send("Login failed 2");
        }
    } catch (error) {
        console.log(error);
    }
};

//endpoint afficher un utilisateur à l'ai du mail
const ReadOne = async(req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email
        },
        attributes: {
            exclude: ["password"]
        }
    });
    if (user) {
        return res.status(200).send({user});
    } else {
        return res.status(401).send({error: "Auncun utilisateur trouver avec "});
    }
};

//affiche tout les utilisateurs
const ReadUser = async(req, res) => {
    User.findAll( {
        attributes: {
            exclude: ["password"]
        }
    })
    .then((user) => {
        if (user) {
            return res.status(200).send({user});
        } else {
            return res.status(401).send({error: "Auncun utilisateur"});
        }
    })
};

//permet de modifier les informations d'un compte
const editUser = async(req, res) => {
    const { firstname, lastname, email, role } = req.body;
    const user = await User.update({
        firstname: firstname,
        lastname: lastname,
        email: email,
        role: role,
    },
    { where: { id: req.params.id } }
    )
    return res.status(200).send({user});
};

//permet de supprimer un utilisateur à l'ai de son id
const deleteUser = async(req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id: id },
    }).then(() => {
        return res.status(200).json({ message: "user delete success"});
    })
};

module.exports = {
    signup,
    sigin,
    ReadOne,
    ReadUser,
    editUser,
    deleteUser
};