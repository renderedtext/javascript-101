const exec = require('child_process').exec;

const executeSystemCall = command => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

describe('minigrepCLI', () => {

  it('Throws error when arguments are undefined', done => {
    const promise = executeSystemCall('./src/minigrep dog');

    promise.then(res => {
      expect(res).toEqual('Wrong arguments\n');
      done();
    });
  });

  it('Throws error when there are more than 2 arguments', done => {
    const promise = executeSystemCall('./src/minigrep arg1 arg2 arg3');

    promise.then(res => {
      expect(res).toEqual('Wrong arguments\n');
      done();
    });
  });

  describe('matching a file', () => {

    it('Throws error if path is to directory', done => {
      const promise = executeSystemCall('./src/minigrep dog files');

      promise.then(res => {
        expect(res).toEqual('EISDIR: illegal operation on a directory, read\n');
        done();
      });
    });

    it('Throws error if file doesn\'t exist', done => {
      const promise = executeSystemCall('./src/minigrep dog file.txt');

      promise.then(res => {
        expect(res).toEqual('ENOENT: no such file or directory, open \'file.txt\'\n');
        done();
      });
    });

    it('Returns index of matched pattern and file path', done => {
      const promise = executeSystemCall('./src/minigrep dog files/file2.txt');

      promise.then(res => {
        expect(res).toEqual('index: 7, file: files/file2.txt\n');
        done();
      });
    });

    it('Prints message when nothing is matched', done => {
      const promise = executeSystemCall('./src/minigrep crab files/file1.txt');

      promise.then(res => {
        expect(res).toEqual('No matches found\n');
        done();
      });
    });

  });

  describe('matching files in directory', () => {

    it('Throws error if path is to file', done => {
      const promise = executeSystemCall('./src/minigrep -r dog files/file1.txt');

      promise.then(res => {
        expect(res).toEqual('ENOTDIR: not a directory, scandir \'files/file1.txt\'\n');
        done();
      });
    });

    it('Throws error if directory doesn\'t exist', done => {
      const promise = executeSystemCall('./src/minigrep -r dog folder');

      promise.then(res => {
        expect(res).toEqual('ENOENT: no such file or directory, scandir \'folder\'\n');
        done();
      });
    });

    it('Prints message when nothing is matched', done => {
      const promise = executeSystemCall('./src/minigrep -r crab files');

      promise.then(res => {
        expect(res).toEqual('No matches found\n');
        done();
      });
    });

    it('Returns index of matched pattern and file path for every match in every file', done => {
      const promise = executeSystemCall('./src/minigrep -r dog files');

      promise.then(res => {
        expect(res).toEqual('index: 7, file: files/file2.txt\nindex: 6, file: files/fol1/file3.txt\n');
        done();
      });
    });

  });
});
