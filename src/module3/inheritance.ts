// 1. Base class
class AnimalC {
    constructor(public name: string) {}
  
    move(distanceInMeters: number = 0): void {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  
    makeSound(): void {
      console.log("The animal makes a sound");
    }
  }
  
  // 2. Derived class
  class DogC extends AnimalC {
    constructor(name: string, private breed: string) {
      super(name); // Call the parent constructor
    }
  
    bark(): void {
      console.log('Woof! Woof!');
    }
  
    // Overriding the move method
    move(distanceInMeters = 5): void {
      console.log('Running...');
      super.move(distanceInMeters);
    }
  
    // Overriding the makeSound method
    makeSound(): void {
      this.bark();
    }
  
    getBreed(): string {
      return this.breed;
    }
  }
  
  // 3. Another derived class
  class Snake extends AnimalC {
    constructor(name: string, private venomous: boolean) {
      super(name);
    }
  
    // Overriding the move method
    move(distanceInMeters = 5): void {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  
    // Overriding the makeSound method
    makeSound(): void {
      console.log("Hiss!");
    }
  
    isVenomous(): boolean {
      return this.venomous;
    }
  }
  
  // Usage examples
  let animal = new AnimalC("Generic AnimalC");
  let dogC = new DogC("Rex", "German Shepherd");
  let snake = new Snake("Sly", true);
  
  // Using AnimalC methods
  animal.move(10);
  animal.makeSound();
  
  // Using DogC methods
  dogC.move();
  dogC.bark();
  dogC.makeSound();
  console.log(`${dogC.name} is a ${dogC.getBreed()}`);
  
  // Using Snake methods
  snake.move();
  snake.makeSound();
  console.log(`${snake.name} is ${snake.isVenomous() ? "venomous" : "not venomous"}`);
  
  // 4. Demonstrating polymorphism
  let animals: AnimalC[] = [animal, dogC, snake];
  
  for (let animal of animals) {
    animal.move();
    animal.makeSound();
  }
  
  // 5. Using instanceof for type checking
  function performAnimalActions(animal: AnimalC) {
    animal.move();
    animal.makeSound();
  
    if (animal instanceof DogC) {
      animal.bark();  // We can safely call bark() because we've checked that animal is a DogC
    } else if (animal instanceof Snake) {
      console.log(`This snake is ${animal.isVenomous() ? "venomous" : "not venomous"}`);
    }
  }
  
  performAnimalActions(dogC);
  performAnimalActions(snake);
  
  // 6. Abstract base class
  abstract class ShapeC {
    constructor(protected color: string) {}
  
    abstract getArea(): number;
  
    getColor(): string {
      return this.color;
    }
  }
  
  class CircleC extends ShapeC {
    constructor(color: string, private radius: number) {
      super(color);
    }
  
    getArea(): number {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends ShapeC {
    constructor(color: string, private width: number, private height: number) {
      super(color);
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  }
  
  let circleC = new CircleC("red", 5);
  let rectangle = new Rectangle("blue", 4, 6);
  
  console.log(`CircleC area: ${circleC.getArea()}, color: ${circleC.getColor()}`);
  console.log(`Rectangle area: ${rectangle.getArea()}, color: ${rectangle.getColor()}`);