#!/usr/bin/env node
'use strict'

const examples = require('../data/examples')

// Starting array
const ages = examples.numbers.ages // [7, 24, 21, 18, 22]

// Use find to return the age of first age over 21
// using a predicate function
const isAdult = (age) => {
  return age >= 21
}
ages.find(isAdult) // 24

// 1.  Find the first food that more than 20 days old
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
// CODE ALONG CODE GOES HERE
