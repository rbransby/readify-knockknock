"use strict";
var SoapServiceException = require('./SoapServiceException');
class ReadifyKnockKnockService
{
    constructor()
    {
        
    }
    
    // returns a guid
    WhatIsYourToken()
    {
        return "00000000-0000-0000-0000-000000000000";
    }
    
    // Returns the given number in the Fibonacci sequence.
    FibonacciNumber(n)
    {
        if (n > 92 || n < -92)
        {
            throw new SoapServiceException('s:Client', 'Fibonacci number > 92 or < -92 will cause 64bit integer overflow', 'ArgumentOutOfRangeException');
        }
        let fibonacciNumber = 0;
        let nextFibonacciNumber = 1;
        for (let i = 0; i<Math.abs(n); i++)
        {
            let oldFibonacciNumber = fibonacciNumber;
            fibonacciNumber = nextFibonacciNumber;
            nextFibonacciNumber = oldFibonacciNumber + fibonacciNumber;            
        }
        
        if (n < 0)
        {
            fibonacciNumber = fibonacciNumber * Math.pow(-1, n+1);
        }
        return fibonacciNumber;
    }
    
    // return "Equilateral", "Isosceles", "Scalene", "Error"
    WhatShapeIsThis(a, b, c)
    {
        // ensure no sides are < 0 and that we have a triangle 
        // using triangle inequality theorem
        if (a > 0 && b > 0 && c > 0
        && (a + b > c) && (a + c > b) && (b + c > a))
        {
            if (a == b && b == c)
            {
                return 'Equilateral';
            }
            else if (a == b || a == c || b == c)
            {
                return 'Isosceles';
            }
            else 
            {
                return "Scalene";
            }
        }
        
        return "Error";
    }
    
    // returns string
    Reverses(s)
    {
        if (s == "undefined")
        {
            throw new SoapServiceException('s:Client', 'Parameter "s" cannot be null', 'ArgumentOutOfRangeException');
        }
        let sArray = s.split(' ');
        let reverseds = [];
        for (let word of sArray)
        {
            let reversedWord = '';
            for (let i = word.length-1; i >= 0; i--)
            {
                reversedWord += word[i];
            }
            reverseds.push(reversedWord);
        }
        return reverseds.join(' ');
    }
}

module.exports = ReadifyKnockKnockService;