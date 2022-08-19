const mongoose = require('../config/MongoConnect');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: Object,
        required: true
    },
    refreshToken: {
        type: String,
    },
}, {
    timestamps: true
});

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 12, (err, hash) => {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

UserSchema.methods.comparePassword = async function (candidatePassword, cb) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
};


module.exports = mongoose.model('User', UserSchema);
