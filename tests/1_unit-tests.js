const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
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
	test('Default 1 for input', () => {
		const input = undefined;
		assert.deepEqual(convertHandler.getNum(input), 1);
	});
	test('Read each unit', () => {
		const input = ['gal', 'kg', 'km', 'L', 'lbs', 'mi'];
		const output = ['gal', 'kg', 'km', 'L', 'lbs', 'mi'];
		input.forEach((input, index) => {
			assert.deepEqual(convertHandler.getUnit(input), output[index]);
		});
	});
	test('Error for invalid unit', () => {
		const input = 'cm';
		assert.deepEqual(convertHandler.getUnit(input), 'invalid unit');
	});
	test('Return correct unit from input', () => {
		const input = ['gal', 'kg', 'km', 'L', 'lbs', 'mi'];
		const output = ['L', 'lbs', 'mi', 'gal', 'kg', 'km'];
		input.forEach((input, index) => {
			assert.deepEqual(convertHandler.getReturnUnit(input), output[index]);
		});
	});
	test('Return spelled-out unit from input', () => {
		const input = ['gal', 'kg', 'km', 'L', 'lbs', 'mi'];
		const output = [
			'gallons',
			'kilograms',
			'kilometers',
			'liters',
			'pounds',
			'miles',
		];
		input.forEach((input, index) => {
			assert.deepEqual(convertHandler.spellOutUnit(input), output[index]);
		});
	});
	test('Convert gal to L', () => {
		const inputNum = '1';
		const inputUnit = 'gal';
		assert.deepEqual(convertHandler.convert(inputNum, inputUnit), 3.78541);
	});
	test('Convert L to gal', () => {
		const inputNum = '1';
		const inputUnit = 'L';
		assert.deepEqual(convertHandler.convert(inputNum, inputUnit), 0.26417);
	});
	test('Convert mi to km', () => {
		const inputNum = '1';
		const inputUnit = 'mi';
		assert.deepEqual(convertHandler.convert(inputNum, inputUnit), 1.60934);
	});
	test('Convert km to mi', () => {
		const inputNum = '1';
		const inputUnit = 'km';
		assert.deepEqual(convertHandler.convert(inputNum, inputUnit), 0.62137);
	});
	test('Convert lbs to kg', () => {
		const inputNum = '1';
		const inputUnit = 'lbs';
		assert.deepEqual(convertHandler.convert(inputNum, inputUnit), 0.45359);
	});
	test('Convert kg to lbs', () => {
		const inputNum = '1';
		const inputUnit = 'kg';
		assert.deepEqual(convertHandler.convert(inputNum, inputUnit), 2.20462);
	});
});
