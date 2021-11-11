let Calculator = require('../../src/calculator/calculator');

describe("Test Calculator class", function() {
    let calc = null;

    beforeEach(function() {
        calc = new Calculator();
    })

    it("Test plus function with usual parameters", function() {
        calc.plus(5);
        expect(calc.result).toBe(5);
    })

    it("Test minus function with usual parameters", function() {
        calc.minus(10);
        expect(calc.result).toBe(-10);
    })

    it("Test multiple function with usual parameters", function() {
        calc.multiple(10);
        expect(calc.result).toBe(0);
    })

    it("Test div function with usual parameters", function() {
        calc.div(10);
        expect(calc.result).toBe(0);
    })
    
    it("Test getResult function with usual parameters", function() {
        calc.plus(5);
        const res = calc.getResult();
        expect(res).toBe(5);
    })

    it("Test all function with string parameters", function() {
        expect(() => calc.plus(null)).toThrowError(Error, 'it is not number');
        expect(() => calc.plus(NaN)).not.toBeNaN();
        expect(() => calc.minus(NaN)).not.toBeNaN();
        expect(() => calc.minus('sdf')).toThrowError(Error, 'it is not number');
        expect(() => calc.multiple('12321d')).toThrowError(Error, 'it is not number');
        expect(() => calc.div('////////')).toThrowError(Error, 'it is not number');
    })

    it("Test div function with big number", function() {
        calc.plus(17000000000000000);
        calc.div(2)
        expect(calc.result).toBe(8500000000000000)
    })

    it("Test div function with big number", function() {
        expect(() => calc.div(0)).toThrowError(Error, 'Division by zero is forbidden');
    })

    it("Test div function with fix", function() {
        calc.plus(0.23245345345345345);
        calc.div(0.3345345345345345345345345);
        expect(calc.result).toBe(0.6948564);
    })

    it("Test clean function", function() {
        calc.plus(7);
        calc.multiple(30);
        calc.minus(10);
        calc.cleanFunction();
        expect(calc.result).toBe(0);
        expect(calc.result).not.toBeTruthy();
    })
});