const exec = require('child_process').exec;

const executeSystemCall = str => {
  return new Promise((resolve, reject) => {
    exec(str, (error, stdout, stderr) => {
      if (error)
      {
        reject(error);
      }
      else
      {
        resolve(stdout);
      }
    });
  });
};

describe('ComplexNumberCLI', () => {

  describe('conjugate', () => {
    it('Returns string representation of conjugate complex number', (done) => {
      const promise = executeSystemCall('./src/cn conj 2,3');

      promise.then((res) => {
        expect(res).toBe('2 - 3i\n');
        done();
      });
    });

    it('Throws error', done => {
      const promise = executeSystemCall('./src/cn conj 2,nn')

      promise.catch(error => {
        expect(true).toBe(true);
        done();
      });
    });
  });

  describe('moduo', () => {
    it('Returns result of moduo command', done => {
      const promise = executeSystemCall('./src/cn mod 3,4');

      promise.then(res => {
        expect(res).toBe('5\n');
        done();
      });
    });
  });

  describe('add', () => {
    it('Returns string representation of result of adding two complex numbers', done => {
      const promise = executeSystemCall('./src/cn add 2,1 -1,4');

      promise.then(res => {
        expect(res).toBe('1 + 5i\n');
        done();
      });
    });
  });

  describe('subtract', () => {
    it('Returns string representation of result of subtracting two complex numbers', done => {
      const promise = executeSystemCall('./src/cn sub 2,4 3,3');

      promise.then(res => {
        expect(res).toBe('-1 + 1i\n');
        done();
      });
    });
  });

  describe('multiply', () => {
    it('Returns string representation of result of multiplying two complex numbers', done => {
      const promise = executeSystemCall('./src/cn mul 2,2 -1,3');

      promise.then(res => {
        expect(res).toBe('-8 + 4i\n');
        done();
      });
    });
  });

  describe('divide', () => {
    it('Returns string representation of result of dividing two complex numbers', done => {
      const promise = executeSystemCall('./src/cn div -1,3 2,2');

      promise.then(res => {
        expect(res).toBe('0.5 + 1i\n');
        done();
      });
    });
  });

});
