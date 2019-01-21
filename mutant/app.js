class Calculator {
    substractPositive(a,b) {
        if (a > 0) {
            return (a-b);
        } else {
            return 0;
        }
    }

    add (a,b) {
        if (a>b) {
            return a+b;
        } else if (a == b) {
            return a+a;
        } else {
            return b+a;
        }
    }
}

module.exports = Calculator;