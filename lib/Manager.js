// Dependencies
const Employee = require("./Employee");

// Manager class definition
class Manager extends Employee{
  constructor(name, id, email, officeNumber) {
    // call parent constructor
    super(name, id, email);

    // Input validation exception handling
    if(typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
      throw new Error("Expected 'officeNumber' to be a non-negative number");
    }

    // attribute definitions
    this.officeNumber = officeNumber;
  }

  // accessor methods
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;