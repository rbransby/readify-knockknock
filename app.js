"use strict";

var soap = require('soap-server');
var TestService = require('./TestService');
var ReadifyKnockKnockService = require('./ReadifyKnockKnockService');

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new TestService());
var readifyKnockKnock = soapServer.addService('readifyKnockKnockService', new ReadifyKnockKnockService());

var whatIsYourTokenOperation = readifyKnockKnock.getOperation('WhatIsYourToken');

var fibonacciNumberOperation = readifyKnockKnock.getOperation('FibonacciNumber');
fibonacciNumberOperation.setInputType('sequenceNumber', {type: 'number'});
fibonacciNumberOperation.setOutputType('number');
fibonacciNumberOperation.addFault('ArgumentOutOfRangeException');

var whatShapeIsThisOperation = readifyKnockKnock.getOperation('WhatShapeIsThis');
whatShapeIsThisOperation.setInputType('sideA', {type: 'number'});
whatShapeIsThisOperation.setInputType('sideB', {type: 'number'});
whatShapeIsThisOperation.setInputType('sideC', {type: 'number'});
whatShapeIsThisOperation.setOutputType('string');

var reverseWordsOperation = readifyKnockKnock.getOperation('ReverseWords');
reverseWordsOperation.setInputType('words', {type: 'string'});
reverseWordsOperation.setOutputType('string');
reverseWordsOperation.addFault('ArgumentNullException');

soapServer.listen(8080, '127.0.0.1');