const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
	suite('Convert Handler Numbers Input', () => {
		test('Whole Numbers', () => {
			const input = '10';
			assert.deepEqual(convertHandler.getNum(input), 10);
		});
		test('Decimal Numbers', () => {
			const input = '2.3';
			assert.deepEqual(convertHandler.getNum(input), 2.3);
		});
		test('Fractions', () => {
			const input = '2/8';
			assert.deepEqual(convertHandler.getNum(input), 0.25);
		});
		test('Fractions with a decimal', () => {
			const input = '2.6/5';
			assert.deepEqual(convertHandler.getNum(input), 0.52);
		});
		test('Double-fractions error', () => {
			const input = '3/2/3';
			assert.deepEqual(convertHandler.getNum(input), 'invalid number');
		});
	});
});
