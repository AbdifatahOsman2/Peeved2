const db = require("../db");
const User = require("../models/user");
const { hashPassword } = require("../utils");

const main = async () => {
    const users = [
        {
            username: "test",
            email: "wee@gmail.com",
            password_digest: hashPassword("123")
        },
        {
            username: "abdinator",
            email: "abdi@gmail.com",
            password_digest: hashPassword("123")
        }
    ]

    await User.deleteMany();
    await User.insertMany(users);
}

const run = async () => {
    await main();
    db.close();
};

run();