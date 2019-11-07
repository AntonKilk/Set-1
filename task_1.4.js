// Write a functional version for each arithmetic operator in JS.

let add = function (a, b) { 
    return a+b;
};
let subtract = function (a, b) { 
    return a-b;
};
let multiply = function (a, b) { 
    return a*b;
};
let divide = function (a, b) { 
    return a/b;
};

// Can you spot the difference between functions and operators? 
// Compare and analize the following:

[1, 2, 3].reduce(add, 0);
[1, 2, 3].reduce((x, y) => x + y, 0);
[1, 2, 3].reduce((+), 0) //-- won't work in JS but...

/* Now list all differences and similarities
 between functions and operators you can find. 
There should be at least 5 differences.
The number of similarities can be reduced to a single SUBSET relation:
 "operators are specialized functions"... */


/* 1) Operators are usually simplier than functions and used for 
specific fields e.g. Numbers' field or Boolean' field, while functions
 can be used to combine booleans and numbers etc.
2) Functions are often used for repeatitive actions e.g. to add all
 numbers in array it easier to use method ".reduce()" instead of operator "+".
3) Functions are usually used to complete a multilevel task
 e.g. "do this, then this... "etc. It will be a robust work to do with 
operators only.
 */