var ltdp = require('./index')
var assert = require('assert')

var expected  = [
	    [1],
	   [1,1],
	  [1,2,1],
	 [1,3,3,1],
	[1,4,6,4,1]
]

assert.deepEqual(ltdp(1), expected.slice(0, 1), 'One row')
assert.deepEqual(ltdp(2), expected.slice(0, 2), 'Two rows')
assert.deepEqual(ltdp(3), expected.slice(0, 3), 'Three rows')
assert.deepEqual(ltdp(4), expected.slice(0, 4), 'Four rows')
assert.deepEqual(ltdp(5), expected.slice(0, 5), 'Five rows')

var oneHundred = ltdp(100)
var filteredOneHundred = oneHundred.filter(row => row[0] === 1 && row[row.length - 1] === 1)

assert.equal(oneHundred.length, filteredOneHundred.length, 'All outers to be 1')
