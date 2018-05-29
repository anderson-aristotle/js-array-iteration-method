#!/usr/bin/env node
'use strict'

const examples = require('../data/examples')

// Starting array
const developers = examples.names // ['Mike', 'Toni', 'Ben']

// Iterate using FOR loop to print 'Hello <name>' for each student in array
for (let i = 0; i < developers.length; i++) {
  console.log('Hello ' + developers[i])
}

// 1.  Iterate using forEach method
// DEMO CODE GOES HERE
