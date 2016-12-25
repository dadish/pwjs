'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _lab = require('lab');

var _lab2 = _interopRequireDefault(_lab);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export lab
var lab = module.exports.lab = _lab2.default.script();

var describe = lab.describe,
    it = lab.it,
    before = lab.before,
    after = lab.after;


describe('Test', function () {
  it('should pass', function (done) {
    (0, _expect2.default)(true).toBe(true);
    done();
  });
  it('should fail', function (done) {
    (0, _expect2.default)(true).toBe(false);
    done();
  });
});