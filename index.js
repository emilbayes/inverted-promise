module.exports = function InvertedPromise () {
  var res
  var rej

  var p = new Promise((resolve, reject) => {
    res = resolve
    rej = reject
  })

  p.resolve = res
  p.reject = rej

  return p
}
