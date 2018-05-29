'use strict'

const names = ['Mike', 'Toni', 'Ben']
const ages = [7, 24, 21, 18, 22]
const whole = new Array(11).fill(1).map((e, i, a) => e * i)
const fridge = [
    { food: 'Carrots', age: 32 },
    { food: 'Onions', age: 23 },
    { food: 'Bell Peppers', age: 16 },
    { food: 'Soda', age: 7 },
    { food: 'Pizza', age: 4 },
    { food: 'Cake', age: 3 }
]

module.exports = {
  fridge,
  names,
  numbers: {
    whole,
    ages
  }
}
