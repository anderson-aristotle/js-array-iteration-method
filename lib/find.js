'use strict'

// Starting array
const ages = [7, 24, 21, 18, 22]

// Use find to return the age of first age over 21
// using a predicate function
const isAdult = (age) => {
  return age >= 21
}
ages.find(isAdult) // 24

// 1.  Find the first country that launched 20 or less rockets
// using a predicate function called isCalm
const rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe(ESA)', launches: 7 },
    { country: 'India', launches: 4 },
    { country: 'Japan', launches: 3 }
]
// CODE ALONG CODE GOES HERE
