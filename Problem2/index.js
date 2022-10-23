"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importing class Matrix
const Problem2_1 = require("./Problem2");
//created an object called matrix
//created 2 matrices
const matrix1 = new Problem2_1.Matrix(3, 3);
const matrix2 = new Problem2_1.Matrix(3, 3);
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
console.log(matrix1.toString());
console.log(matrix2.toString());
