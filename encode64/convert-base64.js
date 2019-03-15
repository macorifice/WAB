var base64 = require('base-64');
var utf8 = require('utf8');

const args = require('yargs').argv;

var text = args.user+':'+args.pwd;
var bytes = utf8.encode(text);
var encoded = base64.encode(bytes);

console.log(encoded);