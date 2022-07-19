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
  //stub
}

// asks engineer questions 
function addEngineer() {
  //stub
}
// asks intern questions 
function addIntern() {
  //stub
}

// generates HTML string and writes to /dist/index.html
function generateHTML() {
  //stub
}

// starts the app by asking for manager info
function init() {
  addEmployee();
}

init();