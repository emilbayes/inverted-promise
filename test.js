const test = require('tape')
const InvertedPromise = require('.')

test('resolve', function (assert) {
  assert.plan(1)
  const p = new InvertedPromise()

  p.then(value => {
    assert.ok(value === 'ok')
  }).catch(err => {
    assert.error(err)
  })

  p.resolve('ok')
})

test('resolve', function (assert) {
  assert.plan(1)
  const p = new InvertedPromise()

  p.then(value => {
    assert.error(new Error())
  }).catch(err => {
    assert.ok(err === 'ok')
  })

  p.reject('ok')
})

test('resolve twice', function (assert) {
  assert.plan(1)
  const p = new InvertedPromise()

  p.then(value => {
    assert.ok(value === 'ok')
  }).catch(err => {
    assert.error(err)
  })

  p.resolve('ok')
  p.resolve('ok2')
})

test('resolve then reject', function (assert) {
  assert.plan(1)
  const p = new InvertedPromise()

  p.then(value => {
    assert.ok(value === 'ok')
  }).catch(err => {
    assert.error(err)
  })

  p.resolve('ok')
  p.reject('ok')
})
