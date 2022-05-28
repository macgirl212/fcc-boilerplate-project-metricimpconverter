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

			// if input number does not exist, default to "1"
			if (inputNum === undefined) {
				inputNum = '1';
			}

			const num = convertHandler.getNum(inputNum);
			const unit = convertHandler.getUnit(inputUnit);
			const returnUnit = convertHandler.getReturnUnit(unit);
			const firstSpelledUnit = convertHandler.spellOutUnit(unit);
			const secondSpelledUnit = convertHandler.spellOutUnit(returnUnit);
			const convertedNum = convertHandler.convert(num, unit);

			const stringMessage = `${num} ${firstSpelledUnit} converts to ${convertedNum.toFixed(
				5
			)} ${secondSpelledUnit}`;
			res
				.status(200)
				.json({ initNum: num, initUnit: unit, string: stringMessage });
		} catch (error) {
			console.log(error);
		}
	});
};
