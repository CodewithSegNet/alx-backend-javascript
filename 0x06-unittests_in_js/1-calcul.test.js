const assert = require('assert');
const calculateNumber = require('./1-calcul.js')

describe('calculateNumber', () => {
	it('Total sum of args', () => {
	assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
	});
	it('subtract both args', () => {
	assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
	});
	it('Divide both args', () => {
	assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
	});
	it('Divide args if 0 throw Error\'s', () => {
	assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0));
	});

});
