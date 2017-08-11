const isTheCallback = function () {
  console.log('in isTheCallback')
}

const takesCallback = function (callback) {
  callback()
}

takesCallback(isTheCallback)

takesCallback(function () {
  console.log('in anonymous function')
})

takesCallback( () => {
  console.log('in anonymous arrow function')
})
