"use strict";
var _a, _b, _c, _d;
exports.__esModule = true;
//importing class Matrix
var Problem2_1 = require("./Problem2");
//created an object called matrix
//created 2 matrices
var matrix1 = new Problem2_1.Matrix(3, 3);
var matrix2 = new Problem2_1.Matrix(3, 3);
var matrix3 = new Problem2_1.Matrix(3, 2);
//matrix1
matrix1.insert(0, 0, 2);
matrix1.insert(0, 1, 6);
matrix1.insert(0, 2, 8);
matrix1.insert(1, 0, 9);
matrix1.insert(1, 1, 2);
matrix1.insert(1, 2, 6);
matrix1.insert(2, 0, 7);
matrix1.insert(2, 1, 8);
matrix1.insert(2, 2, 9);
//matrix2
matrix2.insert(0, 0, 4);
matrix2.insert(0, 1, 5);
matrix2.insert(0, 2, 1);
matrix2.insert(1, 0, 6);
matrix2.insert(1, 1, 8);
matrix2.insert(1, 2, 2);
matrix2.insert(2, 0, 7);
matrix2.insert(2, 1, 6);
matrix2.insert(2, 2, 2);
//matrix3
matrix3.insert(0, 0, 2);
matrix3.insert(0, 1, 6);
matrix3.insert(1, 0, 8);
matrix3.insert(1, 1, 9);
matrix3.insert(2, 0, 2);
matrix3.insert(2, 1, 3);
//shows matrix 1, 2 & 3
console.log(matrix1.toString());
console.log(matrix2.toString());
console.log(matrix3.toString());
//shows example sum 
console.log((_a = matrix1.sum(matrix2)) === null || _a === void 0 ? void 0 : _a.toString());
//shows example error sum 
console.log((_b = matrix1.sum(matrix3)) === null || _b === void 0 ? void 0 : _b.toString());
//shows examples of the multiplication 
console.log((_c = matrix1.multiplication(matrix2)) === null || _c === void 0 ? void 0 : _c.toString());
console.log((_d = matrix1.multiplication(matrix3)) === null || _d === void 0 ? void 0 : _d.toString());
