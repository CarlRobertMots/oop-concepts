class Shape {
    constructor (color) {
        this.color = color
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
    GetArea(){
        console.log('Area of the shape')
    }
}

class Circle extends Shape {
    constructor(color, radius){
        super(color)
        this.radius = radius
    }
     getArea (){
        return Math.PI * Math.pow(this.radius, 2)
     } 
    print(){
        return `Circle (r: ${this.radius}, color: ${this.color}).`
    }

}
class Square extends Shape {
    constructor(color, side){
        super(color)
        this.side = side
    }
    getArea(){
        return Math.pow(this.side,2)
    }
    print(){
        return `Square (color: ${this.color}, side: ${this.side}).`
    }
}
class Rectangle extends Shape {
    constructor(color, length, width) {
        super(color)
        this.length = length
        this.width = width
    }
    getArea() {
        return this.length * this.width
    }
    print(){
        return `Rectangle (color: ${this.color}, length: ${this.length}, width: ${this.width}).`
    }
}

class Paint {
    constructor(){
        this.shapes = [] // MASSIIV

    }
    addShape(shape){
        this.shapes.push(shape)
    }
    getShapes(){
        return this.shapes
    }
    calculateTotalArea() {
        let total = 0
        this.shapes.forEach(shape =>{
            total += shape.getArea()
        })
        return total
    }
    getCircles(){
        return this.shapes.filter(shape => shape instanceof Circle)
        
    }
    getSquares(){
        return this.shapes.filter(shape => shape instanceof Square)
        
    }
    getRectangles(){
        return this.shapes.filter(shape => shape instanceof Rectangle)
        
    }
}

const circle1 = new Circle ('red', 5)
const square1 = new Square ('black', 4)
const rectangle1 = new Rectangle ('blue', 6, 3)
const paint = new Paint()
paint.addShape(square1)
paint.addShape(circle1)
paint.addShape(rectangle1)
console.log(paint)
console.log(paint.calculateTotalArea())
console.log(paint.getCircles())
console.log(paint.getSquares())
console.log(paint.getRectangles())