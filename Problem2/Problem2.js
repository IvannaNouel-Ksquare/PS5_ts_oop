"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var Matrix = /** @class */ (function () {
    function Matrix(row, column) {
        this._row = row;
        this._column = column;
        this._arr = [];
        //initialize the array
        for (var i = 0; i < row; i++) {
            this._arr[i] = [];
            for (var j = 0; j < column; j++) {
                this._arr[i][j] = 0;
            }
        }
    }
    Object.defineProperty(Matrix.prototype, "row", {
        // get the number of rows
        get: function () {
            return this._row;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "column", {
        //get the number of columns
        get: function () {
            return this._column;
        },
        enumerable: false,
        configurable: true
    });
    //set the elements of the matrix at the given position (i,j)
    Matrix.prototype.insert = function (row, column, element) {
        this._arr[row][column] = element;
    };
    //get the elements of the matrix at the given position (i,j)
    Matrix.prototype.getElement = function (row, column) {
        return this._arr[row][column];
    };
    //add two matrices. If the matrices cannot be added log, "NOOP"
    Matrix.prototype.sum = function (matrix) {
        //creating a new variable that contains the type Matrix
        var matrixSum = new Matrix(this._row, this._column);
        //checking if the rows and columns match so we can add
        if ((this._row === matrix._row) && (this._column === matrix._column)) {
            for (var i = 0; i < this._row; i++) {
                for (var j = 0; j < this._column; j++) {
                    //creating the new matrix with the sum of the other matrices
                    //parameters row(i), colum(j) and then matrix is going to get the element of the matrix that I pass 
                    matrixSum.insert(i, j, matrix.getElement(i, j) + this.getElement(i, j));
                }
            }
            return matrixSum;
        }
        else {
            console.log("NOOP");
        }
    };
    //multiplying the two matrices 
    Matrix.prototype.multiplication = function (matrix) {
        var matrixMultiplication = new Matrix(this._row, matrix._column);
        //checks the condition if the first matrix has the same number of columns as the same number of rows of the first matrix
        if (this._column === matrix._row) {
            for (var i = 0; i < this._row; i++) {
                for (var j = 0; j < matrix._column; j++) {
                    var m = 0;
                    for (var k = 0; k < this._column; k++) {
                        matrixMultiplication.insert(i, j, m += this.getElement(i, k) * matrix.getElement(k, j));
                    }
                }
            }
            return matrixMultiplication;
        }
        else {
            console.log("NOOP");
        }
    };
    Matrix.prototype.toString = function () {
        var str = '';
        for (var i = 0; i < this._row; i++) {
            str += '[';
            for (var j = 0; j < this._column; j++) {
                str += " ".concat(this._arr[i][j], ", ");
            }
            str += ']\n';
        }
        return str;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
