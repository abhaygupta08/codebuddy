const allowedOrigins = require('../config/allowedOrigins');

const credentials = (req, res, next) => {
    const origin = req.headers.origin;
    try{

        if (allowedOrigins.includes(origin)) {
            res.header('Access-Control-Allow-Credentials', true);
        }
    }
    catch(err){
        console.log(err);
    }
    next();
}

module.exports = credentials