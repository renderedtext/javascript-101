'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MatrixSerializer = function () {
  function MatrixSerializer() {
    _classCallCheck(this, MatrixSerializer);
  }

  _createClass(MatrixSerializer, [{
    key: 'read',
    value: function read(file) {
      var fs = require('fs');

      return new Promise(function (resolve, reject) {
        fs.readFile(file, function (err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data.toString());
          }
        });
      });
    }
  }, {
    key: 'write',
    value: function write(matrix, file) {
      if (this.validate(matrix)) {
        var fs = require('fs');
        var ws = fs.createWriteStream(file, { encoding: 'utf8' });

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = matrix[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var row = _step.value;

            var rowString = '';
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var val = _step2.value;

                rowString = rowString + ' ' + val;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            ;
            rowString = rowString.slice(1);
            ws.write(rowString + '\n');
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        ws.end();
      }
    }
  }, {
    key: 'validate',
    value: function validate(matrix) {
      if (matrix.constructor !== Array || matrix.length == 0) {
        return false;
      } else {
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = matrix[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var row = _step3.value;

            if (row.constructor !== Array || row.length == 0) {
              return false;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
      return true;
    }
  }, {
    key: 'formatText',
    value: function formatText(text) {
      var matrix = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = text.split('\n')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var row = _step4.value;

          console.log(row);
          if (row === '') {
            continue;
          }
          matrix.push(row.split(' ').map(Number));
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return matrix;
    }
  }]);

  return MatrixSerializer;
}();

;

module.exports = MatrixSerializer;