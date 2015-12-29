var express = require('express');
var router = express.Router();

var data = [
  {id: 1, author: "Yang Gang", text: "This is one comment"},
  {id: 2, author: "Zou Li", text: "This is second comment"}
];

/* GET users listing. */
router.get('/comments', function(req, res, next) {
  res.json(data);
});

module.exports = router;