import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    lecturer: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: [],
    },
    comments: { type: [String], default: [], },
    createdAt: {
        type: Date,
        default: new Date(),
    },
}, {timestamps: true});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
