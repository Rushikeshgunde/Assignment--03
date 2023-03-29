var circle = /** @class */ (function () {
    function circle(data) {
        this.radius = data;
        this.pi = 3.14;
    }
    circle.prototype.claculatArea = function () {
        var ans = 0;
        ans = this.pi * this.radius * this.radius;
        return ans;
    };
    return circle;
}());
var obj = new circle(10.7);
var cal = 0;
cal = obj.claculatArea();
console.log("area is:" + cal);
