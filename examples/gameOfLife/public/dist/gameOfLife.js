'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Population = function () {
  function Population(rows, cols) {
    _classCallCheck(this, Population);

    this.rows = rows;
    this.cols = cols;
    this.map = [];
    this.init();
  }

  _createClass(Population, [{
    key: 'init',
    value: function init() {
      for (var i = 0; i < this.rows; i++) {
        this.map.push([]);
        for (var j = 0; j < this.cols; j++) {
          this.map[i][j] = Math.round(Math.random());
        }
      }
    }
  }, {
    key: 'print',
    value: function print() {
      console.log('-01234');
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var row = _step.value;

          var nums = '' + i++;
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = row[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var val = _step2.value;

              nums += val === 1 ? '*' : ' ';
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

          console.log(nums);
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

      console.log('\r');
    }
  }, {
    key: 'countNeighbours',
    value: function countNeighbours(row, col) {
      var living = 0;
      var dead = 0;
      var _arr = [-1, 0, 1];
      for (var _i = 0; _i < _arr.length; _i++) {
        var i = _arr[_i];var _arr2 = [-1, 0, 1];

        for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
          var j = _arr2[_i2];
          if (i === 0 && j === 0 || row + i < 0 || row + i >= this.rows || col + j < 0 || col + j >= this.cols) {
            continue;
          }
          if (this.map[row + i][col + j] === 0) {
            dead++;
          } else {
            living++;
          }
        }
      }
      return { living: living, dead: dead };
    }
  }, {
    key: 'iter',
    value: function iter() {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this.map.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _step3$value = _slicedToArray(_step3.value, 2),
              rowIdx = _step3$value[0],
              row = _step3$value[1];

          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = row.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                  colIdx = _step4$value[0],
                  val = _step4$value[1];

              if (val === 0) {
                if (this.countNeighbours(rowIdx, colIdx).living === 3) {
                  this.map[rowIdx][colIdx] = 1;
                }
              } else {
                var neighbours = this.countNeighbours(rowIdx, colIdx);
                if (neighbours.living > 3 || neighbours.living < 2) {
                  this.map[rowIdx][colIdx] = 0;
                }
              }
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
  }]);

  return Population;
}();

;