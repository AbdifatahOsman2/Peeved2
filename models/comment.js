const { model, Schema } = require("mongoose");

const commentSchema = new Schema(
    {
        comment: { type: String, required: true },
        postId: { type: Schema.Types.ObjectId, ref: "Post" },
        userId: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
);

module.exports = model("Comment", commentSchema);