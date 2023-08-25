const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
	it('should return the sum of rounded numbers', () => {
		assert.strictEqual(calculateNumber(1, 3), 4);
	});

	it('rounding up b\'s floating point fractional numbers', () => {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
	});

	it('rounding both a and b\'s floating point fractional number', () => {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});

	it('rounding up a and b\'s floating point fractional numbers', () => {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});

	it('rounding down a\'s floating point fractional number', () => {
		assert.strictEqual(calculateNumber(1.4, 2.0), 3);
	});

	it('rounding down b\'s floating point fractional numbers', () => {
		assert.strictEqual(calculateNumber(1.0, 2.4), 3);
	});
});
