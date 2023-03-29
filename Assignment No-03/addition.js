var arithematic = /** @class */ (function () {
    function arithematic(A, B) {
        this.num1 = A;
        this.num2 = B;
    }
    arithematic.prototype.Addition = function () {
        return this.num1 + this.num2;
    };
    arithematic.prototype.substraction = function () {
        return this.num1 - this.num2;
    };
    arithematic.prototype.Multiplication = function () {
        return this.num1 * this.num2;
    };
    arithematic.prototype.Divisible = function () {
        return this.num1 / this.num2;
    };
    return arithematic;
}());
var obj1 = new arithematic(11, 10);
var ans = 0;
ans = obj1.Addition();
console.log("Addition of obj1 is:" + ans);
ans = obj1.substraction();
console.log("substraction of obj1 is :" + ans);
ans = obj1.Multiplication();
console.log("Multiplication of obj1 is :" + ans);
ans = obj1.Divisible();
console.log("Divisible of obj1 is :" + ans);
