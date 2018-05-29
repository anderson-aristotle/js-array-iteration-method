#!/usr/bin/env node
'use strict'

const examples = require('../data/examples')

// Example array
const nums = examples.numbers.whole // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Find the sum of all elements in an array using anonymous arrow function
const sum = nums.reduce((prev, curr) => prev + curr)
console.log(sum)

// 1.  Find the sum of all elements in an array using named arrow function
// CODE ALONG CODE GOES HERE

// Find the largest of all elements in an array using anonymous arrow function
const largest = nums.reduce((prev, curr) => prev > curr ? prev : curr)
console.log(largest)

// 2.  Find the largest of all elements in an array using named arrow function
// CODE ALONG CODE GOES HERE

// 3.  Find the total number of rockets launched in an array
// using anonymous arrow function
// start the count with 0
const rockets = examples.rockets
console.log(rockets)
// const rockets = [
//     { country: 'Russia', launches: 32 },
//     { country: 'US', launches: 23 },
//     { country: 'China', launches: 16 },
//     { country: 'Europe(ESA)', launches: 7 },
//     { country: 'India', launches: 4 },
//     { country: 'Japan', launches: 3 }
// ]
// CODE ALONG CODE GOES HERE
