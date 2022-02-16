const { model, Schema } = require("mongoose");

const postSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        content: { type: String, required: true },
        userId: { type: Schema.Types.ObjectId, ref: "User" }
    },
    { timestamps: true }
);

module.exports = model("Post", postSchema);