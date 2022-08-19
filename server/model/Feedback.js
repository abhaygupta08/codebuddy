const mongoose = require('../config/MongoConnect');

const FeedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});



module.exports = mongoose.model('Feedback', FeedbackSchema);
