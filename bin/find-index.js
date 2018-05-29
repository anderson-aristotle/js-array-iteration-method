#!/usr/bin/env node
'use strict'

const examples = require('../data/examples')

// Starting array
const ages = examples.numbers.ages // [7, 24, 21, 18, 22]

// Use indexOf to find the position of 21
ages.indexOf(21) // 2

// 1. Use findIndex to find the position of first age over 21
// using a predicate function called isAdult
// DEMO CODE GOES HERE
