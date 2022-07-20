// DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const validator = require("email-validator");
const template = require("./src/template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// VARIABLES
const employeeQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the employee's name:"
  },
  {
    type: "input",
    name: "id",
    message: "Enter the employee's ID:",
    validate: function(input) {
      if(isNaN(input) || input < 0){
        return "Please enter a valid non-negative ID number"
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: "Enter the employee's email address:",
    validate: function(input) {
      if(!validator.validate(input)){
        return "Please enter a valid email address";
      } else{
        return true;
      }
    }
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: "Enter the manager's office number:",
    validate: function(input) {
      if(isNaN(input) || input < 0){
        return "Please enter a valid non-negative office number"
      } else {
        return true;
      }
    }
  }
];

const engineerQuestions = [
  {
    type: "input",
    name: "github",
    message: "Enter the engineer's github username:"
  }
];

const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school name:"
  }
];

const employeesArr = [];


// FUNCTION DEFINITIONS

// asks which kind of employee to add
function addEmployee() {
  inquirer.prompt({
    type: "list",
    name: "empType",
    message: "Please select which kind of employee you would like to add:",
    choices: ["Engineer", "Intern", "Finished Building Team"]
  }).then((response) => {
    switch(response.empType){
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;
      case "Finished Building Team":
        generateHTML();
        break;
    }
  })
}

// asks manager questions 
function addManager() {
  console.log("Please enter the manager's info:");
  inquirer.prompt(employeeQuestions.concat(managerQuestions))
  .then((response) => {
    try {
      let manager = new Manager(response.name, +response.id, response.email, +response.officeNumber);
      employeesArr.push(manager);
      addEmployee();
    } catch (error) {
      console.error(error);
    }
  });
}

// asks engineer questions 
function addEngineer() {
  console.log("Please enter the engineer's info:");
  inquirer.prompt(employeeQuestions.concat(engineerQuestions))
  .then((response) => {
    try {
      let engineer = new Engineer(response.name, +response.id, response.email, response.github);
      employeesArr.push(engineer);
      addEmployee();
    } catch (error) {
      console.error(error);
    }
  });
}
// asks intern questions 
function addIntern() {
  console.log("Please enter the intern's info:");
  inquirer.prompt(employeeQuestions.concat(internQuestions))
  .then((response) => {
    try {
      let intern = new Intern(response.name, +response.id, response.email, response.school);
      employeesArr.push(intern);
      addEmployee();
    } catch (error) {
      console.error(error);
    }
  });
}

// generates HTML string and writes to /dist/index.html
function generateHTML() {
  let html = template(employeesArr);
  fs.writeFile("./dist/index.html", html, (err) => {
    err ? console.error(err) : console.log("Successfully saved!");
  });
}

// starts the app by asking for manager info
function init() {
  console.log("\x1b[33mEnter information to build your team: \x1b[0m");
  addManager();
}

init();