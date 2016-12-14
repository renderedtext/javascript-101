const MatrixSerializer = require('./matrixSerializer.js');

const serializer = new MatrixSerializer();

//serializer.write([[1, 2, 3], [1, 2, 3], [3, 3, 5]], 'stream.txt');
console.log(serializer.validate([]));
console.log(serializer.validate('dsada'));
console.log(serializer.validate([[1]]));
console.log(serializer.validate([[1, 2, 3], [2, 3, 4]]));
console.log(serializer.validate([[1, 2, 3], [2, 3, 4], []]));

const promise = serializer.read('stream.txt');
promise
.then(data => console.log(serializer.formatText(data)))
.catch(err => console.log(err));
