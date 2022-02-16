const Comment = require("../models/comment");

const getAllComments = async (req,res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

const getCommentById = async (req, res) => {
    try {
        const { id } = req.params
        const comment = await Comment.findOne({_id: id})
        res.json(comment)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const newComment = async (req, res) => {
    try {
        const comment = new Comment({...req.body, userId:res.locals.user._id});
        // const comment = new Comment({comment: req.body.comment, userId:req.body.userId, postId:req.body.postId});

        await comment.save();
        res.status(201).json(comment);
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

const destroyComment = async (req, res) => {
    try {
        const { id } = req.params;
        Comment.findByIdAndDelete(id, (e, comment) => {
            if (e) {
                return res.status(500).json({ error: e.message })
            }
            if (!comment) {
                return res.status(404).json({ error: `Comment, id: ${id} not found`})
            }
            res.status(200).json({ message: `Comment, id: ${id} successfully deleted!`})
         })
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

module.exports = {
    getAllComments,
    getCommentById,
    newComment,
    destroyComment
}