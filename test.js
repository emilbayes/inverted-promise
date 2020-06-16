const InvertedPromise = require('.')

var iP = new InvertedPromise()

var iP2 = new InvertedPromise()

iP.then((value) => {
  console.log(value)
})

iP2.catch((err) => {
  console.log(err)
})

iP.resolve('Hello')
iP2.reject('World')
