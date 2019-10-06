var helpers = require('./helpers');
var config = require('./config');

var handlers = {};

/* End-Point: /alive */
handlers.alive = function(data,callback){
  var acceptableMethods = ['get','post'];
  if(acceptableMethods.indexOf(data.method) > -1){
    var objDate = new Date();
    var json = {"status":"alive","datetime":objDate.toISOString()};
    callback(200, json);
  } else {
    callback(405);
  }
};

/* End-Point: /version */
handlers.version = function(data,callback){
  var acceptableMethods = ['get','post'];
  if(acceptableMethods.indexOf(data.method) > -1){
    var json = {"version":config.version,"codename":config.codeName};
    callback(200, json);
  } else {
    callback(405);
  }
};

/* Not-Found handler */
handlers.notFound = function(data,callback){
  callback(404);
};

module.exports = handlers;
