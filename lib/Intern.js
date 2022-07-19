// Dependencies
const Employee = require("./Employee");

// Intern class definition
class Intern extends Employee {
  constructor(name, id, email, school) {
    // call parent constructor
    super(name, id, email);

    // input validation exception handling
    if(typeof school !== "string" || !school.trim().length) {
      throw new Error("Expected 'school' to be a non-empty string");
    }

    // attribute definitions
    this.school = school;
  }

  // accessor methods
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;