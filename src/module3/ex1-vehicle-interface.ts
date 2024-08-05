interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class CarEx implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log(`${this.make} ${this.model} engine is starting...`);
    }
  }
  
  class Motorcycle implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log(`${this.make} ${this.model} is revving up!`);
    }
  }
  
  let myCarEx = new CarEx("Toyota", "Corolla", 2020);
  let myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2019);
  
  myCarEx.start(); // Toyota Corolla engine is starting...
  myMotorcycle.start(); // Harley-Davidson Street 750 is revving up!
  