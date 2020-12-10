const Car = require('./car.js');

class Tesla extends Car {
  constructor (cName, cBrand, cYear, cFuel, cColor, apV) {
    super(cName, cBrand, cYear, cFuel, cColor);
    this.autoPilotVersion = apV;
  }
}

module.exports = Tesla;