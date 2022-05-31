'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
	let convertHandler = new ConvertHandler();
	app.get('/api/convert/', (req, res) => {
		try {
			const input = req.query.input;

			// splits the input into number and unit
			let [inputNum, inputUnit] = input.split(/^(.*\d)?(\w+)$/).slice(1, -1);

			const num = convertHandler.getNum(inputNum);
			const unit = convertHandler.getUnit(inputUnit);

			// error messages
			if (num === 'invalid number' && unit === 'invalid unit') {
				return res.status(200).send('invalid number and unit');
			}

			if (num === 'invalid number') {
				return res.status(200).send('invalid number');
			}

			if (unit === 'invalid unit') {
				return res.status(200).send('invalid unit');
			}

			const returnUnit = convertHandler.getReturnUnit(unit);
			const firstSpelledUnit = convertHandler.spellOutUnit(unit);
			const secondSpelledUnit = convertHandler.spellOutUnit(returnUnit);
			const convertedNum = convertHandler.convert(num, unit);
			const stringMessage = convertHandler.getString(
				num,
				firstSpelledUnit,
				convertedNum,
				secondSpelledUnit
			);
			res.status(200).json({
				initNum: num,
				initUnit: unit,
				returnNum: convertedNum,
				returnUnit: returnUnit,
				string: stringMessage,
			});
		} catch (error) {
			console.log(error);
		}
	});
};
