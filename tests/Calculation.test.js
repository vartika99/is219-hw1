const Calculation = require('../src/models/Calculation');
const Addition = require('../src/operations/Addition');
const Subtraction = require('../src/operations/Subtraction');
const Multiplication = require('../src/operations/Multiplication');
const Division = require('../src/operations/Division');
const Square = require('../src/operations/Square');
const SquareRoot = require('../src/operations/SquareRoot');

test('Test - Calculation Instantiation', () => {
    let op = Addition;
    let calculation = new Calculation(4,2,op);
    expect(calculation.a).toBe(4);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test - Results for Addition', () => {
    let op = Addition;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(6);
});

test('Test - Results for Subtraction', () => {
    let op = Subtraction;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test - Results for Multiplication', () => {
    let op = Multiplication;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(8);
});

test('Test - Results for Division', () => {
    let op = Division;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test - Results for Square', () => {
    let op = Square;
    let calculation = new Calculation(2,2,op);
    expect(calculation.GetResults()).toBe(4);
});

test('Test - Results for Square Root', () => {
    let op = SquareRoot;
    let calculation = new Calculation(4,2,op);
    expect(calculation.GetResults()).toBe(2);
});