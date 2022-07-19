// Dependencies
const Employee = require("./Employee");

// Engineer class definition
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // call parent constructor
    super(name, id, email);

    // input validation exception handling
    if(typeof github !== "string" || !github.trim().length) {
      throw new Error("Expected 'github' to be a non-empty string");
    }

    // attribute definitions
    this.github = github;
  }

  // accessor methods
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;