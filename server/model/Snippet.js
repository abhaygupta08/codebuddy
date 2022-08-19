const mongoose = require('../config/MongoConnect');

// if snippetType true means public snippet(listing on dashboard)
const SnippetSchema = new mongoose.Schema({
    authorUserName: {
        type: String,
        required: true,
    },
    authorId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    snippetTitle: {
        type: String,
        required: true,
    },
    snippetCode: {
        type: String,
        required: true,
    },
    snippetType: {
        type: Boolean,
        required: true,
    },
    snippetLanguage: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true
    });



module.exports = mongoose.model('Snippet', SnippetSchema);
