function ConvertHandler() {
	this.getNum = function (input) {
		let result = input;

		return result;
	};

	this.getUnit = function (input) {
		let result;
		switch (input) {
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
			case 'lb':
			case 'lbs':
				result = 'pounds';
				return result;
			case 'mi':
				result = 'miles';
				return result;
			default:
				return result;
		}
	};

	this.getReturnUnit = function (initUnit) {
		let result;

		return result;
	};

	this.spellOutUnit = function (unit) {
		let result;

		return result;
	};

	this.convert = function (initNum, initUnit) {
		const galToL = 3.78541;
		const lbsToKg = 0.453592;
		const miToKm = 1.60934;
		let result;

		return result;
	};

	this.getString = function (initNum, initUnit, returnNum, returnUnit) {
		let result;

		return result;
	};
}

module.exports = ConvertHandler;
