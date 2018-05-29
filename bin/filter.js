#!/usr/bin/env node
'use strict'

const examples = require('../data/examples')

// Example array
const nums = examples.numbers.whole // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// Filter for odd elements in an array using predicate function
const isOdd = (num) => {
  return num % 2
}
const odds = nums.filter(isOdd)
console.log(odds)

// 1.  Filter for odd elements in an array using anonymous arrow function
// LAB CODE GOES HERE

// 2.  Filter for only food that is less than 20 days old
// using a predicate function called isRotten
const fridge = examples.fridge
// [
//     { food: 'Carrots', age: 32 },
//     { food: 'Onions', age: 23 },
//     { food: 'Bell Peppers', age: 16 },
//     { food: 'Soda', age: 7 },
//     { food: 'Pizza', age: 4 },
//     { food: 'Cake', age: 3 }
// ]

// LAB CODE GOES HERE
