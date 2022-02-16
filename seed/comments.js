const db = require("../db");
const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");

const main = async () => {
    const [ seedUser1 ] = await User.find({ username: "johntran" });
    const [ seedUser2 ] = await User.find({ username: "abdinator" });
    const [ seedPost1 ] = await Post.find({ title: "Tailgaters!" });
    const [ seedPost2 ] = await Post.find({ title: "No turnsignal!" });

    const comments = [
        {
            comment: "I hate that!",
            userId: seedUser2._id, 
            postId: seedPost1._id
        },
        {
            comment: "I agree!",
            userId: seedUser1._id, 
            postId: seedPost2._id
        },
        {
            comment: "I know right!",
            userId: seedUser1._id, 
            postId: seedPost2._id
        }
        
        
    ]
    await Comment.deleteMany();
    await Comment.insertMany(comments);
}

const run = async () => {
    await main();
    db.close();
};

run();