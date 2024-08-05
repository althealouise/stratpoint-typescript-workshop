abstract class Shape {
    constructor(protected name: string) {}
  
    abstract area(): number;
  
    displayArea(): void {
      console.log(`The area of this ${this.name} is ${this.area()}`);
    }
  }
  
  class CircleEx extends Shape {
    constructor(private radius: number) {
      super("circleEx");
    }
  
    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class RectangleEx extends Shape {
    constructor(private width: number, private height: number) {
      super("rectangleEx");
    }
  
    area(): number {
      return this.width * this.height;
    }
  }
  
  let circleEx = new CircleEx(5);
  let rectangleEx = new RectangleEx(4, 6);
  
  circleEx.displayArea(); // The area of this circleEx is approximately 78.54
  rectangleEx.displayArea(); // The area of this rectangleEx is 24
  