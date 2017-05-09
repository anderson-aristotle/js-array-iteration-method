#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')

// Example array
const nums = examples.numbers.whole // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Filter for odd elements in an array using predicate function
const isOdd = (num) => {
  return num % 2
}
const odds = nums.filter(isOdd)

// 1.  Filter for odd elements in an array using anonymous arrow function
// LAB CODE GOES HERE

// 2.  Filter for only countries that launched 20+ rockets
// using a predicate function called isAggressive
const rockets = examples.rockets
// const rockets = [
//     { country: 'Russia', launches: 32 },
//     { country: 'US', launches: 23 },
//     { country: 'China', launches: 16 },
//     { country: 'Europe(ESA)', launches: 7 },
//     { country: 'India', launches: 4 },
//     { country: 'Japan', launches: 3 }
// ]
// LAB CODE GOES HERE
