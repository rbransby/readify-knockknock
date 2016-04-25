"use strict";

class TestService {
    constructor()
    {
        
    }
    
    Test1(name) {
        return `Hello ${name}`;
    }
}

// function TestService(){}

// TestService.prototype.Test1 = function(name)
// {
//     return 'Hello '+name;
// }

module.exports = TestService;