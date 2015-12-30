var mongo = require('mongodb');
var monk = require('monk');
var q = require('q');

var commentService = {};

var db = monk('localhost:27017/Moto');

commentService.getAll = function() {
	var deferred = q.defer();
	var comments = db.get('comments');
	comments.find({},{},function(err,docs) {
		if(err) {
			deferred.reject(err);
		}else {
			deferred.resolve(docs);
		}
	});
	return deferred.promise;
}

commentService.add = function(comment) {
	var deferred = q.defer();
	var comments = db.get('comments');
	comments.insert(comment,function(err,doc) {
		if(err) {
			deferred.reject(err);
		} else{
			deferred.resolve("success");
		}
	});
	return deferred.promise;
}

module.exports = commentService;