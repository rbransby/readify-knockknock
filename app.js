"use strict";

var soap = require('soap-server');
var TestService = require('./TestService');

var soapServer = new soap.SoapServer();
var soapService = soapServer.addService('testService', new TestService());

soapServer.listen(1337, '127.0.0.1');