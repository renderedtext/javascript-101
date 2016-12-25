const exec = require('child_process').exec;
const expect = require('chai').expect;


const executeSystemCall = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
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

describe('ShapesCLI', () => {
  it('Throws error when shape is not specified', done => {
    const promise = executeSystemCall('./src/sh -a');

    promise.then(res => {
      expect(res).to.equal('No shape specified\n');
      done();
    });
  });

  it('Throws error when shape is not recognized', done => {
    const promise = executeSystemCall('./src/sh -s pls');

    promise.then(res => {
      expect(res).to.equal('Unknown shape\n');
      done();
    });

  });

  describe('square', () => {
    it('Returns area when area flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s square 5 -a');

      promise.then(res => {
        expect(res).to.equal('Area: 25\n');
        done();
      });
    });

    it('Returns perimeter when perimeter flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s square 5 -p');

      promise.then(res => {
        expect(res).to.equal('Perimeter: 20\n');
        done();
      });
    });

    it('Throws error when params are bad', done => {
      const promise = executeSystemCall('./src/sh -s square 2 1 -ap');

      promise.then(res => {
        expect(res).to.equal('Invalid data for Square\n');
        done();
      });
    });

    it('Returns area and perimeter when no flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s square 5');

      promise.then(res => {
        expect(res).to.equal('Area: 25\nPerimeter: 20\n');
        done();
      });
    });

  });

  describe('rectangle', () => {

    it('Returns area when area flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s rectangle 4 5 -a');

      promise.then(res => {
        expect(res).to.equal('Area: 20\n');
        done();
      });
    });

    it('Returns perimeter when perimeter flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s rectangle 4 5 -p');

      promise.then(res => {
        expect(res).to.equal('Perimeter: 18\n');
        done();
      });
    });

    it('Throws error when params are bad', done => {
      const promise = executeSystemCall('./src/sh -s rectangle 4 s2 -ap');

      promise.then(res => {
        expect(res).to.equal('Invalid data for Rectangle\n');
        done();
      });
    });

    it('Returns area and perimeter when no flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s rectangle 4 5');

      promise.then(res => {
        expect(res).to.equal('Area: 20\nPerimeter: 18\n');
        done();
      });
    });

  });

  describe('circle', () => {
    it('Returns area when area flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s circle 3 -a')

      promise.then(res => {
        expect(res).to.equal('Area: 28.27\n');
        done();
      });
    });

    it('Returns perimeter when perimeter flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s circle 3 -p');

      promise.then(res => {
        expect(res).to.equal('Perimeter: 18.85\n');
        done();
      });
    });

    it('Throws error when params are bad', done => {
      const promise = executeSystemCall('./src/sh -s circle 3 2');

      promise.then(res => {
        expect(res).to.equal('Invalid data for Circle\n');
        done();
      });
    });

    it('Returns area and perimeter when no flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s circle 3');

      promise.then(res => {
        expect(res).to.equal('Area: 28.27\nPerimeter: 18.85\n');
        done();
      });
    });

  });

  describe('triangle', () => {
    it('Returns area when area flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s triangle 3 4 5 -a');

      promise.then(res => {
        expect(res).to.equal('Area: 6\n');
        done();
      });
    });

    it('Returns perimeter when perimeter flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s triangle 3 4 5 -p');

      promise.then(res => {
        expect(res).to.equal('Perimeter: 12\n');
        done();
      });
    });

    it('Throws error when params are bad', done => {
      const promise = executeSystemCall('./src/sh -s triangle 2 1 -ap');

      promise.then(res => {
        expect(res).to.equal('Invalid data for Triangle\n');
        done();
      });
    });

    it('Returns area and perimeter when no flag is specified', done => {
      const promise = executeSystemCall('./src/sh -s triangle 3 4 5');

      promise.then(res => {
        expect(res).to.equal('Area: 6\nPerimeter: 12\n');
        done();
      });
    });
  });

});
