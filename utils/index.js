const { compareSync, hashSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const User = require("../models/user");
const Post = require("../models/post");

const SALT = process.env.SALT || 10;
const SECRET = process.env.SECRET || "mondaypeeves";

const createUserInfo = (user) => {
    return {
        username: user.username,
        email: user.email,
        id: user._id
    }
}

const createToken = (payload) => sign(payload, SECRET);

const comparePasswords = (password, passwordDigest) => compareSync(password, passwordDigest);

const hashPassword = (password) => hashSync(password, SALT);

const canModify = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        console.log(typeof post.userId, typeof res.locals.user._id)
        if (post.userId.toString() === res.locals.user._id.toString()) {
            next();
        } else {
            throw new Error("User not authorized to modify");
        }
    } catch (e) {
        return res.status(401).json({ message: e.message });
    }
}

const restrict = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            throw new Error("Failed to provide authorization token!");
        }
        const token = req.headers.authorization.split(" ")[1];
        const { username } = verify(token, SECRET);
        if (username) {
            const [user] = await User.find({ username });
            res.locals.user = user;
            next();
        } else {
            throw new Error("User not authorized")
        }
    } catch (e) {
        return res.status(401).json({ message: e.message });
    }
};

module.exports = {
    createUserInfo, 
    createToken, 
    comparePasswords, 
    hashPassword,
    restrict, 
    canModify
};