"use strict";

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
    FibonacciNumber(sequenceNumber)
    {
        let fibonacciNumber = 0;
        let nextFibonacciNumber = 1;
        for (let i = 0; i<Math.abs(sequenceNumber); i++)
        {
            let oldFibonacciNumber = fibonacciNumber;
            fibonacciNumber = nextFibonacciNumber;
            nextFibonacciNumber = oldFibonacciNumber + fibonacciNumber;            
        }
        
        if (sequenceNumber < 0)
        {
            fibonacciNumber = fibonacciNumber * Math.pow(-1, sequenceNumber+1);
        }
        return fibonacciNumber;
    }
    
    // return "Equilateral", "Isosceles", "Scalene", "Error"
    WhatShapeIsThis(sideA, sideB, sideC)
    {
        
    }
    
    // returns string
    ReverseWords(words)
    {
        
    }
}

module.exports = ReadifyKnockKnockService;