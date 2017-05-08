'use strict'

// Starting array
const students = ['Mike', 'Toni', 'Jessica']

// Iterate using FOR loop to create an array of 'Hello <name>' for each student
// Original array unchanged
let studentsUpdated = []
for (let i = 0; i < students.length; i++) {
  studentsUpdated.push('Hello ' + students[i])
}

// Iterate using .forEach to create an array of 'Hello <name>' for each student
// Original array unchanged
// note: forEach returns undefined
studentsUpdated = []
students.forEach(student => { studentsUpdated.push('Hello ' + student) })

// 1.  Iterate using .map to create an array of 'Hello <name>' for each student
// Original array unchanged
// CODE ALONG CODE GOES HERE
