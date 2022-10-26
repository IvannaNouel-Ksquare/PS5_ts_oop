export class Matrix {

    private _row: number;
    private _column: number;
    private _arr: number[][];

    constructor(row: number, column: number) {
        this._row = row;
        this._column = column;
        this._arr = [];

        //initialize the array

        for (let i: number = 0; i < row; i++) {
            this._arr[i] = [];
            for (let j: number = 0; j < column; j++) {
                this._arr[i][j] = 0;
            }
        }
    }

    // get the number of rows
    public get row() {
        return this._row;
    }

    //get the number of columns
    public get column() {

        return this._column;
    }

    //set the elements of the matrix at the given position (i,j)
    public insert(row: number, column: number, element: number) {

        this._arr[row][column] = element;

    }

    //get the elements of the matrix at the given position (i,j)

    public getElement(row: number, column: number) {

        return this._arr[row][column];

    }

    //add two matrices. If the matrices cannot be added log, "NOOP"

    public sum(matrix: Matrix) {
        //creating a new variable that contains the type Matrix
        let matrixSum = new Matrix(this._row, this._column);

        //checking if the rows and columns match so we can add
        if ((this._row === matrix._row) && (this._column === matrix._column)) {

            for (let i = 0; i < this._row; i++) {
                for (let j = 0; j < this._column; j++) {

                    //creating the new matrix with the sum of the other matrices
                    //parameters row(i), colum(j) and then matrix is going to get the element of the matrix that I pass 
                    matrixSum.insert(i, j, matrix.getElement(i, j) + this.getElement(i, j));

                }
            }
            return matrixSum;
        }
        else {
            console.log("NOOP")
        }

    }

    //multiplying the two matrices 

    public multiplication(matrix: Matrix) {

        //new matrix to save the multiplication
        let matrixMultiplication = new Matrix(this._row, matrix._column);

        //checks the condition if the first matrix has the same number of columns as the same number of rows of the first matrix
        if (this._column === matrix._row) {

            //Goes thorough the rows of the second matrix
            for (let i = 0; i < this._row; i++) {
                //Goes thorough the columns of the first matrix
                for (let j = 0; j < matrix._column; j++) {
                    //declare variable here to sum 
                    let m = 0;
                    //Goes thorough the columns of the first matrix
                    for (let k = 0; k < this._column; k++) {

                        //'creating' matrix passing the operation
                        matrixMultiplication.insert(i, j, m += this.getElement(i, k) * matrix.getElement(k, j));

                    }

                }


            }
            return matrixMultiplication;

        } else {
            console.log("NOOP")

        }

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