export class Matrix {

    private _row: number;
    private _column: number;
    private _arr: number[][];


    /*  get the number of rows
     get the number of columns
     set the elements of the matrix at the given position (i,j)
     add two matrices. If the matrices cannot be added log, "NOOP"
     multiplying the two matrices */

    constructor(row: number, column: number) {
        this._row = row;
        this._column = column;
        this._arr = [];

        for (let i: number = 0; i < row; i++) {
            this._arr[i] = [];
            for (let j: number = 0; j < column; j++) {
                this._arr[i][j] = 0;
            }
        }
    }

    public get row() {
        return this._row;
    }

    public get column() {

        return this._column;
    }


    public insert(row: number, column: number, element: number) {

        this._arr[row][column] = element;

    }

    public getElement(row: number, column: number) {

        return this._arr[row][column];

    }

    public sum(matrix: Matrix) {
        //creating a new variable that contains the type Matrix
        let matrixSum = new Matrix(this._row, this._column);

        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < this._column; j++) {

                //creating the new matrix with the sum of the other matrices
                //parameters row(i), colum(j) and then matrix is going to get the element of the matrix that I pass 
                matrixSum.insert(i, j, matrix.getElement(i, j) + this.getElement(i, j));

            }
        }
        return matrixSum;

    }

    public multiplication(matrix: Matrix) {

        let matrixMultiplication = new Matrix(this._row, matrix._column);
        let m = new Matrix(this._row, matrix._column);

        for (let i = 0; i < this._row; i++) {
            for (let j = 0; j < matrix._column; j++) {
                    matrixMultiplication.insert(i,j, matrix.getElement(j,i) * this.getElement(i,j));
                    for (let k = 0; k < this._column; k++) {
                        m.insert(i,j, matrix.getElement(k,i) + this.getElement(k,j));
                       
                }
            }
        }
        return m;


    }

    public toString(): string {
        let str = '';
        for (let i = 0; i < this._row; i++) {
            str += '['
            for (let j = 0; j < this._column; j++) {
                str += ` ${this._arr[i][j]}, `;
            }
            str += ']\n';
        }
        return str;
    }

}