var express = require('express');
var router = express.Router();
var fs = require('fs');

var cvFilePath = './data/cv.json';

/**
 * CV endpoint
 */
router.get('/cv', function(request, response, next) {
    fs.readFile(cvFilePath, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        response.json(JSON.parse(data));
    });
});

module.exports = router;
