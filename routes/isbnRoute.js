var express = require('express');
var request = require('request-promise');
var IsbnService = require('../services/isbnService');

var router = express.Router();

module.exports = router;

router.post('/api/isbn', (req, res) => {
    req.checkBody('isbn', 'asdasd').isISBN();
    var errors = req.validationErrors();
    if (errors) {
        res.status(400).json({
            error: 'You provided an invalid isbn!'
        });
    } else {
        IsbnService(req.body.isbn.replace(/[\s-]+/g, ''))
            .then(response => res.status(200).json(response))
            .catch(res.status(400).json)
    }
});
