import test from 'ava'
import chr from './'

test(t => {
  t.is(chr(65), 'A')
  t.is(chr(97), 'a')
  t.is(chr(8364), '€')
  t.is(chr(64), '@')
})

test(t => {
  const error = t.throws(() => {
    chr(-1)
  }, RangeError)

  t.is(error.message, 'Invalid code point -1')
})
