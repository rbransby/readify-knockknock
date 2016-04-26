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
    FibonacciNumber(sequenceNumber)
    {
        if (sequenceNumber > 92 || sequenceNumber < -92)
        {
            throw new SoapServiceException('s:Client', 'Sequence Number > 92 or < -92 will cause 64bit integer overflow', 'ArgumentOutOfRangeException');
        }
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
        // ensure no sides are < 0 and that we have a triangle 
        // using triangle inequality theorem
        if (sideA > 0 && sideB > 0 && sideC > 0
        && (sideA + sideB > sideC) && (sideA + sideC > sideB) && (sideB + sideC > sideA))
        {
            if (sideA == sideB && sideB == sideC)
            {
                return 'Equilateral';
            }
            else if (sideA == sideB || sideA == sideC || sideB == sideC)
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
    ReverseWords(words)
    {
        if (words == "undefined")
        {
            throw new SoapServiceException('s:Client', 'words parameter cannot be null', 'ArgumentOutOfRangeException');
        }
        let wordsArray = words.split(' ');
        let reversedWords = [];
        for (let word of wordsArray)
        {
            let reversedWord = '';
            for (let i = word.length-1; i >= 0; i--)
            {
                reversedWord += word[i];
            }
            reversedWords.push(reversedWord);
        }
        return reversedWords.join(' ');
    }
}

module.exports = ReadifyKnockKnockService;