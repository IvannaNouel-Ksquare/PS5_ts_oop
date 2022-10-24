//importing class Matrix
import { Matrix } from "./Problem2";

//created an object called matrix
//created 2 matrices
const matrix1 = new Matrix(3,3);
const matrix2 = new Matrix(3,3);
const matrix3 = new Matrix(3,2);

//matrix1
matrix1.insert(0,0,2);
matrix1.insert(0,1,6);
matrix1.insert(0,2,8);

matrix1.insert(1,0,9);
matrix1.insert(1,1,2);
matrix1.insert(1,2,6);

matrix1.insert(2,0,7);
matrix1.insert(2,1,8);
matrix1.insert(2,2,9);


//matrix2
matrix2.insert(0,0,4);
matrix2.insert(0,1,5);
matrix2.insert(0,2,1);

matrix2.insert(1,0,6);
matrix2.insert(1,1,8);
matrix2.insert(1,2,2);

matrix2.insert(2,0,7);
matrix2.insert(2,1,6);
matrix2.insert(2,2,2);

//matrix3
matrix3.insert(0,0,2);
matrix3.insert(0,1,6);


matrix3.insert(1,0,8);
matrix3.insert(1,1,9);

matrix3.insert(2,0,2);
matrix3.insert(2,1,3);


//shows matrix 1, 2 & 3
console.log(matrix1.toString());
console.log(matrix2.toString());
console.log(matrix3.toString());


//shows example sum 
console.log(matrix1.sum(matrix2)?.toString());

//shows example error sum 
console.log(matrix1.sum(matrix3)?.toString());


//shows examples of the multiplication 
console.log(matrix1.multiplication(matrix2)?.toString());
console.log(matrix1.multiplication(matrix3)?.toString());


