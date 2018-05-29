'use strict'

const names = ['Mike', 'Toni', 'Ben']
const ages = [7, 24, 21, 18, 22]
const whole = new Array(11).fill(1).map((e, i, a) => e * i)
const rockets = [
  { country: 'Russia', launches: 32 },
  { country: 'US', launches: 23 },
  { country: 'China', launches: 16 },
  { country: 'Europe(ESA)', launches: 7 },
  { country: 'India', launches: 4 },
  { country: 'Japan', launches: 3 }
]
module.exports = {
  rockets,
  names,
  numbers: {
    whole,
    ages
  }
}
