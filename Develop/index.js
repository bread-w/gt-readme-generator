// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    message: "What is the name of your project?",
    type: "input",
    name: "title",
  },
  {
    message: "How would you describe your project?",
    type: "input",
    name: "description",
  },
  {
    message:
      "What installation instructions would like to include with your project?",
    type: "input",
    name: "installation",
  },
  {
    message: "What usage instructions would like to include with your project?",
    type: "input",
    name: "usage",
  },
  {
    message:
      "What contribution instructions would you like to include for your users?",
    type: "input",
    name: "contributing",
  },
  {
    message:
      "How would you like to test this code?",
    type: "input",
    name: "tests",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, "utf-8");
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)

    .then((answers) => {
      console.log(answers);
      writeToFile("./Output/README.md", generateMarkdown(answers));
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      console.log(error);
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// function call to initialize program
init();
