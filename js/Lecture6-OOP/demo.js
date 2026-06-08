class Shape {
  calculateArea() {
    console.log("Area calculation depends on the shape");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    console.log("Rectangle area:", this.width * this.height);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    console.log("Circle area:", Math.PI * this.radius * this.radius);
  }
}

const rectangle = new Rectangle(10, 5);

const circle = new Circle(4);

rectangle.calculateArea();
circle.calculateArea();
