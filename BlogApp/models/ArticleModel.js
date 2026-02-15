import { Schema, Types, model } from 'mongoose';

//create user schema
const userCommentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'user'
    },
    comment: {
        type: String
    }
});

//create article schema
const articleSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId, 
        required: [true, "author is required"],
        ref: 'user'
    },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    category: {
        type: String,
        required: [true, "category is required"] 
    },
    content: {
        type: String,
        required: [true, "content is required"] 
    },
    comments: [userCommentSchema],
    isArticleActive: {
        type: Boolean,
        default: true
    }
}, { 
    timestamps: true,
    strict: "throw",
    versionKey: false
});

export const ArticleModel = model('Article', articleSchema);