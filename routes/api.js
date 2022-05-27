'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
	let convertHandler = new ConvertHandler();
	app.get('/api/convert/', (req, res) => {
		try {
			const input = req.query.input;

			let [inputNum, inputUnit] = input.split(/(.*\d)(\w+)/).slice(1, -1);

			// make sure all units from input is lowercase except liters
			inputUnit = inputUnit.toLowerCase();

			if (inputUnit === 'l') {
				inputUnit = 'L';
			}

			const num = convertHandler.getNum(inputNum);
			const unit = convertHandler.getUnit(inputUnit);

			const result = `${num} ${unit}`;
			res
				.status(200)
				.json({ initNum: num, initUnit: inputUnit, string: result });
		} catch (error) {
			console.log(error);
		}
	});
};
