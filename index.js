// DEPENDENCIES
const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// VARIABLES
const employeeQuestions = [];

const managerQuestions = [];

const engineerQuestions = [];

const internQuestions = [];

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
    let manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employeesArr.push(manager);
    addEmployee();
  });
}

// asks engineer questions 
function addEngineer() {
  console.log("Please enter the engineer's info:");
  inquirer.prompt(employeeQuestions.concat(engineerQuestions))
  .then((response) => {
    let engineer = new Engineer(response.name, response.id, response.email, response.github);
    employeesArr.push(engineer);
    addEmployee();
  });
}
// asks intern questions 
function addIntern() {
  console.log("Please enter the intern's info:");
  inquirer.prompt(employeeQuestions.concat(internQuestions))
  .then((response) => {
    let intern = new Intern(response.name, response.id, response.email, response.officeNumber);
    employeesArr.push(intern);
    addEmployee();
  });
}

// generates HTML string and writes to /dist/index.html
function generateHTML() {
  //stub
}

// starts the app by asking for manager info
function init() {
  addManager();
}

init();