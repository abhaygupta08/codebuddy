const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('[MONGO-DB] : Connection Established');
    })
    .catch(() => {
        console.log('[MONGO-DB] : Connection Failed')
    })

module.exports = mongoose;