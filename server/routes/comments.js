var express = require('express');
var router = express.Router();
var commentService = require('../services/commentService')

/* GET comments listing. */
router.get('/', function(req, res, next) {
  commentService.getAll().then(function(data){
	  res.json(data);
  },function(error){
	  console.log(error);
  });
});

router.post('/', function(req, res, next) {
	var comment = req.body;
	commentService.add(comment).then(function(data){
		req.send(data);
	},function(err){
		console.log(err);
	});
});

module.exports = router;