function ConvertHandler() {
	this.getNum = function (input) {
		let numToVerify = input;

		// check for fractions
		if (numToVerify.match(/\d\/\d$/)) {
			const splitNum = numToVerify.split('/');
			let result = splitNum[0] / splitNum[1];
			return result;
		}

		let result = Number(numToVerify);
		return result;
	};

	this.getUnit = function (input) {
		// makes sure all units from input is lowercase except liters
		let result = input.toLowerCase();

		if (result === 'l') {
			result = 'L';
		}
		return result;
	};

	this.getReturnUnit = function (initUnit) {
		let result;
		switch (initUnit) {
			case 'gal':
				result = 'L';
				return result;
			case 'kg':
				result = 'lbs';
				return result;
			case 'km':
				result = 'mi';
				return result;
			case 'L':
				result = 'gal';
				return result;
			case 'lbs':
				result = 'kg';
				return result;
			case 'mi':
				result = 'km';
				return result;
			default:
				console.error('Invalid unit');
				return result;
		}
	};

	this.spellOutUnit = function (unit) {
		let result;
		switch (unit) {
			case 'gal':
				result = 'gallons';
				return result;
			case 'kg':
				result = 'kilograms';
				return result;
			case 'km':
				result = 'kilometers';
				return result;
			case 'L':
				result = 'liters';
				return result;
			case 'lbs':
				result = 'pounds';
				return result;
			case 'mi':
				result = 'miles';
				return result;
			default:
				console.error('Invalid unit');
				return result;
		}
	};

	this.convert = function (initNum, initUnit) {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		let result;

		switch (initUnit) {
			case 'gal':
				result = initNum * galToL;
				return result;
			case 'kg':
				result = initNum / lbsToKg;
				return result;
			case 'km':
				result = initNum / miToKm;
				return result;
			case 'L':
				result = initNum / galToL;
				return result;
			case 'lbs':
				result = initNum * lbsToKg;
				return result;
			case 'mi':
				result = initNum * miToKm;
				return result;
			default:
				console.error('Invalid computation');
				return result;
		}
	};

	this.getString = function (initNum, initUnit, returnNum, returnUnit) {
		let result;

		return result;
	};
}

module.exports = ConvertHandler;
