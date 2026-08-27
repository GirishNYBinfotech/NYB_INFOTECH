class Vehicle {
    start() {
        console.log("Vehicle started")
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving")
    }
}
const car = new Car()
car.start()
car.drive()