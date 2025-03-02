function Car(make, model, year, type) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; 
    this.isAvailable = true;
}

function Customer(name) {
    this.name = name;
    this.rentedCars = [];
}


Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
        car.isAvailable = false;
        this.rentedCars.push(car);
        console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
        console.log(`Sorry, ${car.make} ${car.model} is already rented.`);
    }
};


Customer.prototype.returnCar = function(car) {
    if (this.rentedCars.includes(car)) {
        setTimeout(() => {
            car.isAvailable = true;
            this.rentedCars = this.rentedCars.filter(c => c !== car);
            console.log(`${this.name} returned the ${car.make} ${car.model}.`);
        }, 2000);
    } else {
        console.log(`${this.name} doesn't have this car rented.`);
    }
};


function PremiumCustomer(name, discountRate) {
    Customer.call(this, name);
    this.discountRate = discountRate;
}


PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;


function calculateRentalPrice(car, days, customer) {
    let basePrice = 50;
    let typeMultiplier = car.type === "SUV" ? 1.5 : 1; 
    let totalPrice = days * basePrice * typeMultiplier;

    if (customer instanceof PremiumCustomer) {
        totalPrice *= (1 - customer.discountRate / 100);
    }

    console.log(`Rental price for ${days} days: $${totalPrice.toFixed(2)}`);
    return totalPrice;
}

function Maintenance(car, delay) {
    console.log(`Maintenance started for ${car.make} ${car.model}.`);
    setTimeout(() => {
        car.isAvailable = true;
        console.log(`Maintenance completed for ${car.make} ${car.model}.`);
    }, delay);
}


const car1 = new Car("Toyota", "Corolla", 2020, "Sedan");
const car2 = new Car("Honda", "CR-V", 2021, "SUV");
const car3 = new Car("Ford", "Focus", 2019, "Sedan");

const customer1 = new Customer("Alice");
const premiumCustomer1 = new PremiumCustomer("Bob", 10);

customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);

calculateRentalPrice(car1, 3, customer1);
calculateRentalPrice(car2, 5, premiumCustomer1);

customer1.returnCar(car1);
premiumCustomer1.returnCar(car2);

Maintenance(car3, 3000);