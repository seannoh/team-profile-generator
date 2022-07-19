// Dependencies
const validator = require("email-validator");

// Employee class definition
class Employee {
  constructor(name, id, email) {
    // Input validation exception handling
    if(typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected 'name' to be a non-empty string");
    }
    if(typeof id !== "number" || isNaN(id) || id < 0) {
      throw new Error("Expected 'id' to be a non-negative number");
    }
    if(typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected 'email' to be a non-empty string");
    }
    if(!validator.validate(email)){
      throw new Error("Expected 'email' to be a valid email address");
    }

    // attribute definitions
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  // accessor methods
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;