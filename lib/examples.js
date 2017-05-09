'use strict'

const loadCities = require('./load-cities')

const names = ['Mike', 'Toni', 'Ben']
const ages = [7, 24, 21, 18, 22]
const whole = new Array(11).fill(1).map((e, i, a) => e * i)
const even = new Array(11).fill(2).map((e, i, a) => e * i)
const odd = new Array(11).fill(2).map((e, i, a) => (e * i) + 1)
const fibonacci = ((f0, f1, count) => {
  const fibs = [f0, f1]
  for (let i = 2; i < count; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2]
  }

  return fibs
})(0, 1, 11)
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
    even,
    odd,
    fibonacci,
    ages
  },
  cities: {
    loadCities
  }
}
