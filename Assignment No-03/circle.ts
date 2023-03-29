
class circle{

    radius: number;
    pi: number;

    constructor(data:number) {
        this.radius = data;
        this.pi = 3.14;
    }
    claculatArea(): number{
        
        let ans: number = 0;
        ans=this.pi*this.radius*this.radius
        return ans;
    }
}

var obj = new circle(10.7);
var cal: number = 0;

cal = obj.claculatArea();
console.log("area is:" + cal);