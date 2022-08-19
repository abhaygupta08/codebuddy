const express = require('express');
const Feedback = require('../../model/Feedback');
const router = express.Router();


router.post('/' ,async (req,res,next) => {
    const {email, message} = req.body;
    const newFeedback = new Feedback({
        email,
        message
    });
    await newFeedback.save();
    res.status(201).json({
        message: 'Feedback saved successfully'
    });
} );

module.exports = router;