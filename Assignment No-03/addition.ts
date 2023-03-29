class Arithematic {

    //data or char
    num1: number
    num2: number
    

    constructor(A: number, B: number) {
        this.num1 = A
        this.num2 = B
        
    }
    Addition(): number {
        return this.num1 + this.num2
    }

    substraction(): number {
        return this.num1 - this.num2
    }

    Multiplication(): number {
        return this.num1 * this.num2 
    }
    Divisible(): number {
        return this.num1 / this.num2 
    }
}

 var obj3 = new Arithematic(11, 10)



var ans: number = 0

ans = obj3.Addition()
console.log("Addition of obj1 is:" + ans)

ans = obj3.substraction()
console.log("substraction of obj1 is :" + ans)

ans = obj3.Multiplication()
console.log("Multiplication of obj1 is :" + ans)

ans = obj3.Divisible()
console.log("Divisible of obj1 is :" + ans)