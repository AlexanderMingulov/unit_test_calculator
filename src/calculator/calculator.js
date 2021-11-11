class Calculator {
    constructor() {
        this.result = 0;
    }

    plus(n) {
        if (typeof n !== 'number') throw new Error('it is not number')
        this.result = this.result + n;
        return this;
    }

    minus(n) {
        if (typeof n !== 'number') throw new Error('it is not number')
        this.result = this.result - n;
        return this;
    }

    multiple(n) {
        if (typeof n !== 'number') throw new Error('it is not number')
        this.result = this.result * n;
        return this;
    }

    div(n) {
        if (typeof n !== 'number') throw new Error('it is not number')
        if (n === 0) throw new Error('Division by zero is forbidden')
        this.result = +(this.result / n).toFixed(7);
        return this;
    }

    getResult() {
        return this.result;
    }

    cleanFunction() {
        return this.result = 0;
    }

}

module.exports = Calculator;