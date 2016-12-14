class MatrixSerializer {
  constructor() {

  };
  read(file) {
    const fs = require('fs');

    return new Promise((resolve, reject) => {
      fs.readFile(file, (err, data) => {
        if (err)
        {
          reject(err);
        }
        else
        {
          resolve(data.toString());
        }
      });
    });

  };
  write(matrix, file) {
    if (this.validate(matrix))
    {
      const fs = require('fs');
      const ws = fs.createWriteStream(file, { encoding: 'utf8' });

      for (const row of matrix)
      {
        let rowString = ''
        for (const val of row)
        {
          rowString = `${rowString} ${val}`;
        };
        rowString = rowString.slice(1);
        ws.write(`${rowString}\n`);
      }

      ws.end();
    }
  };
  validate(matrix) {
    if (matrix.constructor !== Array || matrix.length == 0)
    {
      return false
    }
    else
    {
      for (const row of matrix)
      {
        if (row.constructor !== Array || row.length == 0)
        {
          return false
        }
      }
    }
    return true;
  };
  formatText(text) {
    let matrix = [];
    for (const row of text.split('\n'))
    {
      console.log(row);
      if (row === '')
      {
        continue;
      }
      matrix.push(row.split(' ').map(Number));
    }
    return matrix;
  }
};

module.exports = MatrixSerializer
