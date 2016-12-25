import expect from 'expect';
import Lab from 'lab';
import 'babel-polyfill';

// export lab
const lab = module.exports.lab = Lab.script();

const {
  describe,
  it,
  before,
  after,
} = lab;

describe('Test', () => {
  it('should pass', (done) => {
    expect(true).toBe(true);
    done();
  });
  it('should fail', (done) => {
    expect(true).toBe(false);
    done();
  });
});
