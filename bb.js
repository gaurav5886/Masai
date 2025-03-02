function createCar(make, model, year) {
    return {
        make,
        model,
        year,
        describeCar() {
            console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
        }
    };
}
