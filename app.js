"use strict";

// dependencies
var soap = require('soap-server');
var ReadifyKnockKnockService = require('./ReadifyKnockKnockService');
var Config = require('./config.json');

// service configuration
var soapServer = new soap.SoapServer({tns: Config.tns});
var readifyKnockKnock = soapServer.addService('readifyKnockKnockService', new ReadifyKnockKnockService());

// operation and parameter configuratino
var whatIsYourTokenOperation = readifyKnockKnock.getOperation('WhatIsYourToken');

var fibonacciNumberOperation = readifyKnockKnock.getOperation('FibonacciNumber');
fibonacciNumberOperation.setInputType('n', {type: 'number'});
fibonacciNumberOperation.setOutputType('number');
fibonacciNumberOperation.addFault('ArgumentOutOfRangeException');

var whatShapeIsThisOperation = readifyKnockKnock.getOperation('WhatShapeIsThis');
whatShapeIsThisOperation.setInputType('a', {type: 'number'});
whatShapeIsThisOperation.setInputType('b', {type: 'number'});
whatShapeIsThisOperation.setInputType('c', {type: 'number'});
whatShapeIsThisOperation.setOutputType('string');

var reverseWordsOperation = readifyKnockKnock.getOperation('ReverseWords');
reverseWordsOperation.setInputType('s', {type: 'string'});
reverseWordsOperation.setOutputType('string');
reverseWordsOperation.addFault('ArgumentNullException');

// start the server and listen for requests
soapServer.listen(Config.port, Config.host);
console.log(`Listening on ${Config.host} port ${Confit.port}`);