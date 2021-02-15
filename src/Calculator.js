const Calculation = require('./models/Calculation');
const Addition = require('./operations/Addition');
const Subtraction = require('./operations/Subtraction');
const Multiplication = require('./operations/Multiplication');
const Division = require('./operations/Division');
const Square = require('./operations/Square');
const SquareRoot = require('./operations/SquareRoot');

class Calculator {
    static Calculations = [];

    static Addition(a,b) {
        let calculation = Calculation.Create(a, b, Addition);
        return calculation;
    }

    static Subtraction(a,b) {
        let calculation = Calculation.Create(a, b, Subtraction);
        return calculation;
    }

    static Multiplication(a,b) {
        let calculation = Calculation.Create(a, b, Multiplication);
        return calculation;
    }

    static Division(a,b) {
        let calculation = Calculation.Create(a, b, Division);
        return calculation;
    }

    static Square(a,b) {
        let calculation = Calculation.Create(a, b, Square);
        return calculation;
    }

    static SquareRoot(a,b) {
        let calculation = Calculation.Create(a, b, SquareRoot);
        return calculation;
    }
}

module.exports = Calculator;