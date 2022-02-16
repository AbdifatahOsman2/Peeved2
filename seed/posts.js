const db = require("../db");
const Post = require("../models/post");
const User = require("../models/user");

const main = async () => {
    const [ seedUser1 ] = await User.find({ username: "johntran" });
    const [ seedUser2 ] = await User.find({ username: "test" });
    const posts = [
        {
            title: "No turnsignal!",
            content: "Your turnsignal is not optional equipment!",
            userId: seedUser1._id
        },
        {
            title: "Sidewalk hogging!",
            content: "You don't own the sidewalk!",
            userId: seedUser2._id
        },
        {
            title: "Tailgaters!",
            content: "Go back to drivers ed to learn the 2 second rule!",
            userId: seedUser2._id
        }
        
        
    ]
    await Post.deleteMany();
    await Post.insertMany(posts);
}

const run = async () => {
    await main();
    db.close();
};

run();