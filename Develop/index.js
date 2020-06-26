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
    message: "How would you like to test this code?",
    type: "input",
    name: "tests",
  },
  {
    message: "Which of the following licenses would you like to include?",
    type: "list",
    name: "license",
    choices: [
      {
        name: "The MIT License",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        short: "MIT",
      },
      {
        name: "Apache 2.0 License",
        value: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        short: "Apache",
      },
      {

      },
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data, "utf-8");
}

// function to initialize program
function init() {
  // I used the inquirer template from npmjs.com
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
