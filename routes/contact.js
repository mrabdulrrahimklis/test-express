const express = require('express');
const { check } = require("express-validator");
const router = express.Router();

const Contact = require("../models/Contact");

router.post('/contact',
    [
        check('email', 'Please enter valid email').isEmail(),
        check('text', "Please enter more than 30 character").isLength({ min: 30 })
    ],
    async (req, res) => {
        try {
            const { email, text } = req.body;
            const newContact = await new Contact({ email, text });
            await newContact.save();
            res.status(200).json({
                message: "JSON formatted message “Your message has been sent!”"
            });
        } catch(e) {
            console.log('Err: ', e);
            res.status(422).json({
                message: "JSON formatted message containing the list of errors"
            });
        }
    }
);

module.exports = router;