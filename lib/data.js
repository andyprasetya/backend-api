var fs = require('fs');
var path = require('path');
var helpers = require('./helpers');
var config = require('./config');

var lib = {};

lib.baseDir = path.join(__dirname,'/../.data/');

module.exports = lib;
