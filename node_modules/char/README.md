# char

> Return the string representing a character whose Unicode code point is the integer `code`.  
ES6 implementation of **[`Python built-in chr()`](https://docs.python.org/3.6/library/functions.html#chr)** function

[![Build Status](https://travis-ci.org/nhsz/char.svg?branch=master)](https://travis-ci.org/nhsz/char)
[![Coverage Status](https://coveralls.io/repos/github/nhsz/char/badge.svg?branch=master)](https://coveralls.io/github/nhsz/char?branch=master)
[![codebeat badge](https://codebeat.co/badges/a5fa0f50-f5f9-4313-8535-2e3dba3a6507)](https://codebeat.co/projects/github-com-nhsz-char-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e5fc4e079eb481ab006e3338e4db30f)](https://www.codacy.com/app/nquiroz/char?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nhsz/char&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/nhsz/char/badges/gpa.svg)](https://codeclimate.com/github/nhsz/char)

[![NPM](https://nodei.co/npm/char.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/char/)

This is the inverse of **[`ordr`](https://www.npmjs.com/package/ordr)**.

**The valid range for the argument is from 0 through 1114111 (0x10FFFF in base 16)**. RangeError will be raised if `code` is outside that range.


## Install

```
$ npm install char
```


## Usage

```js
const chr = require('char')

console.log(chr(65))
// => 'A'

console.log(chr(97))
// => 'a'

console.log(chr(8364))
// => '€'

console.log(chr(64))
// => '@'

console.log(chr(-1))
// => RangeError: Invalid code point -1
```


## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
