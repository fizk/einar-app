var express = require('express');
var router = express.Router();

/**
 * Home Page
 */
router.get('/', function(request, response, next) {
    response.render('index', { title: 'Express' });
});

/**
 * CV Page
 */
router.get('/cv', function(request, response, next) {
    response.render('index', { title: 'Express' });
});

module.exports = router;
