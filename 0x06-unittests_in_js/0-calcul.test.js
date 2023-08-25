const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it('floating point whole numbers', () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it('rounding up b\'s floating point fractional number', () => {
		assert.strictEqual(calculateNumber(2.6, 2.5), 6);
	});

	it('rounding up b\'s floating point fractional numbers', () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
});
