# `inverted-promise`

[![Build Status](https://travis-ci.org/emilbayes/inverted-promise.svg?branch=master)](https://travis-ci.org/emilbayes/inverted-promise)

> When you want to resolve/reject a promise from the outside

## Usage

```js
var InvertedPromise = require('inverted-promise')

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
```

## API

### `const ip = new InvertedPromise()`

Create a new `InvertedPromise`

### `ip.resolve(value)`

Resolve the promise

### `ip.reject(error)`

Reject the promise

## Install

```sh
npm install inverted-promise
```

## License

[ISC](LICENSE)
