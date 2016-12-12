class Population {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.map = [];
    this.init()
  };
  init() {
    for (let i = 0; i < this.rows; i++)
    {
      this.map.push([]);
      for (let j = 0; j < this.cols; j++)
      {
        this.map[i][j] = Math.round(Math.random());
      }
    }
  };
  print() {
    console.log('-01234');
    let i = 0;
    for (const row of this.map)
    {
      let nums = '' + i++;
      for (const val of row) {
        nums += val === 1 ? '*' : ' ';
      }
      console.log(nums);
    }
    console.log('\r')
  };
  countNeighbours(row, col) {
    let living = 0;
    let dead = 0;
    for (let i of [-1, 0, 1])
    {
      for (let j of [-1, 0, 1])
      {
        if ((i === 0 && j === 0) || row + i < 0 || row + i >= this.rows || col + j < 0 || col + j >= this.cols )
        {
          continue;
        }
        if (this.map[row+i][col+j] === 0)
        {
          dead++;
        }
        else
        {
          living++;
        }
      }
    }
    return { living, dead };
  };
  iter() {
    for (let [rowIdx, row] of this.map.entries())
    {
      for (let [colIdx, val] of row.entries())
      {
        if (val === 0)
        {
          if (this.countNeighbours(rowIdx, colIdx).living === 3)
          {
            this.map[rowIdx][colIdx] = 1;
          }
        }
        else
        {
          const neighbours = this.countNeighbours(rowIdx, colIdx);
          if (neighbours.living > 3 || neighbours.living < 2)
          {
            this.map[rowIdx][colIdx] = 0
          }
        }
      }
    }
  };

};
