type Car = {
    make: string;
    model: string;
    year: number;
    mileage: number;
    isElectric: boolean;
}

function printCarDetails(car: Car): void {
    console.log(`${car.year} ${car.make} ${car.model}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`Electric: ${car.isElectric ? "Yes" : "No"}`);
}
  
const myCar: Car = {
    make: "Mercedes Benz",
    model: "C-Class",
    year: 2023,
    mileage: 5000,
    isElectric: false,
};
  
printCarDetails(myCar);