// // function

// function calculate (command, a, b) {
//     switch (command) {
//         case '+': 
//             return a + b;
//             break;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;    
//         case '/':
//             return a / b;
//         case '%':
//             return a % b;
//         default:
//             break;
//     }
// }

// calculate('+',1,2);

'use strict'
// 1. class declarations

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`draing ${this.color} color! `)
    }

    getArea() {
        return this.width * this.height;
    }

}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());




