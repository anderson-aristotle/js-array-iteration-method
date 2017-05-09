#!/usr/bin/env node
'use strict'

const examples = require('../lib/examples')

// Starting array
const developers = examples.names // ['Mike', 'Toni', 'Jessica']

// Iterate using FOR loop to create an array of 'Hello <name>' for each student
// Original array unchanged
let developerGreetings = []
for (let i = 0; i < developers.length; i++) {
  developerGreetings.push('Hello ' + developers[i])
}

// Iterate using .forEach to create an array of 'Hello <name>' for each student
// Original array unchanged
// note: forEach returns undefined
developerGreetings = []
developers.forEach(developer => { developerGreetings.push('Hello ' + developer) })

// 1.  Iterate using .map to create an array of 'Hello <name>' for each student
// Original array unchanged
// CODE ALONG CODE GOES HERE
