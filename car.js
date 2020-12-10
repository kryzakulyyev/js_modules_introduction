const Vehicle = require('./vehicle.js')

class Car extends Vehicle {
  constructor(cName, cBrand, cYear, cFuel, cColor) {
    super(4);
    this.name = cName;
    this.brand = cBrand;
    this.year = cYear;
    this.fuel = cFuel;
    this.color = cColor;
  }
}

module.exports = Car;