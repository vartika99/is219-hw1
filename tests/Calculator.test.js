const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Addition(1,2);
    expect(result.GetResults()).toBe(3);
});

test('Calculator subtracting two numbers', () => {
    let result = Calculator.Subtraction(1,2);
    expect(result.GetResults()).toBe(-1);
});

test('Calculator multiplying two numbers', () => {
    let result = Calculator.Multiplication(1,2);
    expect(result.GetResults()).toBe(2);
});

test('Calculator dividing two numbers', () => {
    let result = Calculator.Division(1,2);
    expect(result.GetResults()).toBe(.5);
});

test('Calculator square of two numbers', () => {
    let result = Calculator.Square(2,2);
    expect(result.GetResults()).toBe(4);
});

test('Calculator square root two numbers', () => {
    let result = Calculator.SquareRoot(4,2);
    expect(result.GetResults()).toBe(2);
});

test('Calculator adding to calculations', () => {
    let result = Calculator.Division(1,2);
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});