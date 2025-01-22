var express = require('express');
const newsController = require('../controllers/newsController.js');
var router = express.Router();
var bodyParser = require('body-parser'); 
const jsonParser = express.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', newsController.getNewsList);
router.get('/:idNews', newsController.getNews);


module.exports = router;