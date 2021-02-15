const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Addition(4, 2);
    expect(result.GetResults()).toBe(6);
});

test('Calculator subtracting two numbers', () => {
    let result = Calculator.Subtraction(4,2);
    expect(result.GetResults()).toBe(2);
});

test('Calculator multiplying two numbers', () => {
    let result = Calculator.Multiplication(4,2);
    expect(result.GetResults()).toBe(8);
});

test('Calculator dividing two numbers', () => {
    let result = Calculator.Division(4,2);
    expect(result.GetResults()).toBe(2);
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
    let result = Calculator.Division(4,2);
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});