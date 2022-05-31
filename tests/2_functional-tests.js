const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {
	test('Convert valid input', (done) => {
		chai
			.request(server)
			.get('/api/convert')
			.query({ input: '10L' })
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.initNum, 10);
				assert.equal(res.body.initUnit, 'L');
				done();
			});
	});
	test('Convert invalid input', (done) => {
		chai
			.request(server)
			.get('/api/convert')
			.query({ input: '32g' })
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.text, 'invalid unit');
				done();
			});
	});
	test('Convert invalid number', (done) => {
		chai
			.request(server)
			.get('/api/convert')
			.query({ input: '3/7.2/4kg' })
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.text, 'invalid number');
				done();
			});
	});
	test('Convert invalid number and unit', (done) => {
		chai
			.request(server)
			.get('/api/convert')
			.query({ input: '3/7.2/4kilomegagram' })
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.text, 'invalid number and unit');
				done();
			});
	});
	test('Convert with no number', (done) => {
		chai
			.request(server)
			.get('/api/convert')
			.query({ input: 'km' })
			.end((err, res) => {
				assert.equal(res.status, 200);
				assert.equal(res.body.returnNum, 0.62137);
				assert.equal(res.body.returnUnit, 'mi');
				done();
			});
	});
});
