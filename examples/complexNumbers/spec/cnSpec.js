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

  it('Throws error when command is missing', done => {
    const promise = executeSystemCall('./src/cn');

    promise.then(res => {
      expect(res).toBe('Missing command\n');
      done();
    });
  });

  it('Throws error when command is not recognized', done => {
    const promise = executeSystemCall('./src/cn random');

    promise.then(res => {
      expect(res).toBe('Unknown command\n');
      done();
    });
  });

  describe('conjugate', () => {
    it('Returns string representation of conjugate complex number', done => {
      const promise = executeSystemCall('./src/cn conj 2,3');

      promise.then(res => {
        expect(res).toBe('2 - 3i\n');
        done();
      });
    });

    it('Throws error when argument is missing', done => {
      const promise = executeSystemCall('./src/cn conj');

      promise.then(res => {
        expect(res).toBe('Missing number argument\n');
        done();
      });
    });

    it('Throws error when passed too many arguments', done => {
      const promise = executeSystemCall('./src/cn conj 2,2 1,1');

      promise.then(res => {
        expect(res).toBe('Too many arguments\n');
        done();
      });
    });

    it('Throws error when argument is invalid', done => {
      const promise = executeSystemCall('./src/cn conj 2,nn')

      promise.then(res => {
        expect(res).toBe('Invalid complex number parts\n');
        done();
      });
    });

    it('Throws error when argument format is invalid', done => {
      const promise = executeSystemCall('./src/cn conj invalid');

      promise.then(res => {
        expect(res).toBe('Invalid argument format\n');
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

    it('Throws error when argument is missing', done => {
      const promise = executeSystemCall('./src/cn mod');

      promise.then(res => {
        expect(res).toBe('Missing number argument\n');
        done();
      });
    });

    it('Throws error when passed too many arguments', done => {
      const promise = executeSystemCall('./src/cn mod 2,2 1,1');

      promise.then(res => {
        expect(res).toBe('Too many arguments\n');
        done();
      });
    });

    it('Throws error when argument is invalid', done => {
      const promise = executeSystemCall('./src/cn mod nn,2')

      promise.then(res => {
        expect(res).toBe('Invalid complex number parts\n');
        done();
      });
    });

    it('Throws error when argument format is invalid', done => {
      const promise = executeSystemCall('./src/cn mod invalid');

      promise.then(res => {
        expect(res).toBe('Invalid argument format\n');
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

    it('Throws error when argument is missing', done => {
      const promise = executeSystemCall('./src/cn add 1,1');

      promise.then(res => {
        expect(res).toBe('Missing number argument\n');
        done();
      });
    });

    it('Throws error when passed too many arguments', done => {
      const promise = executeSystemCall('./src/cn add 2,2 1,1 3,3');

      promise.then(res => {
        expect(res).toBe('Too many arguments\n');
        done();
      });
    });

    it('Throws error when argument is invalid', done => {
      const promise = executeSystemCall('./src/cn add 2,nn 1,3')

      promise.then(res => {
        expect(res).toBe('Invalid complex number parts\n');
        done();
      });
    });

    it('Throws error when argument format is invalid', done => {
      const promise = executeSystemCall('./src/cn add 1,1 invalid');

      promise.then(res => {
        expect(res).toBe('Invalid argument format\n');
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

    it('Throws error when argument is missing', done => {
      const promise = executeSystemCall('./src/cn sub');

      promise.then(res => {
        expect(res).toBe('Missing number argument\n');
        done();
      });
    });

    it('Throws error when passed too many arguments', done => {
      const promise = executeSystemCall('./src/cn sub 2,2 1,1 3,3');

      promise.then(res => {
        expect(res).toBe('Too many arguments\n');
        done();
      });
    });

    it('Throws error when argument is invalid', done => {
      const promise = executeSystemCall('./src/cn sub 1,1 2,nn')

      promise.then(res => {
        expect(res).toBe('Invalid complex number parts\n');
        done();
      });
    });

    it('Throws error when argument format is invalid', done => {
      const promise = executeSystemCall('./src/cn sub invalid 1,1');

      promise.then(res => {
        expect(res).toBe('Invalid argument format\n');
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

    it('Throws error when argument is missing', done => {
      const promise = executeSystemCall('./src/cn mul 1,3');

      promise.then(res => {
        expect(res).toBe('Missing number argument\n');
        done();
      });
    });

    it('Throws error when passed too many arguments', done => {
      const promise = executeSystemCall('./src/cn mul 2,2 1,1 3,3');

      promise.then(res => {
        expect(res).toBe('Too many arguments\n');
        done();
      });
    });

    it('Throws error when argument is invalid', done => {
      const promise = executeSystemCall('./src/cn mul 3,3 2,nn')

      promise.then(res => {
        expect(res).toBe('Invalid complex number parts\n');
        done();
      });
    });

    it('Throws error when argument format is invalid', done => {
      const promise = executeSystemCall('./src/cn mul invalid invalid');

      promise.then(res => {
        expect(res).toBe('Invalid argument format\n');
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

    it('Throws error when argument is missing', done => {
      const promise = executeSystemCall('./src/cn div');

      promise.then(res => {
        expect(res).toBe('Missing number argument\n');
        done();
      });
    });

    it('Throws error when passed too many arguments', done => {
      const promise = executeSystemCall('./src/cn div 2,2 1,1 3,3');

      promise.then(res => {
        expect(res).toBe('Too many arguments\n');
        done();
      });
    });

    it('Throws error when argument is invalid', done => {
      const promise = executeSystemCall('./src/cn div 2,nn rand')

      promise.then(res => {
        expect(res).toBe('Invalid complex number parts\n');
        done();
      });
    });

    it('Throws error when argument format is invalid', done => {
      const promise = executeSystemCall('./src/cn div 0 invalid');

      promise.then(res => {
        expect(res).toBe('Invalid argument format\n');
        done();
      });
    });
  });

});
