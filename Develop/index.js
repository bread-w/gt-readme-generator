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
    // choices chosen from top 10 of this list: https://www.synopsys.com/blogs/software-security/top-open-source-licenses/
    choices: [
      {
        name: "MIT",
        short: "MIT",
      },
      {
        name: "Apache 2.0",
        short: "Apache",
      },
      {
        name: "GNU GPL v3",
        short: "GNU 3.0",
      },
      {
        name: "GNU GPL v2",
        short: "GNU 2.0",
      },
      {
        name: "BSD 3-Clause",
        short: "BSD 3-C",
      },
      {
        name: "Mozilla Public 2.0",
        short: "Mozilla",
      },
      {
        name: "ISC",
        short: "ISC",
      },
      {
        name: "The Perl",
        short: "Perl",
      },
      {
        name: "Eclipse Public 1.0",
        short: "Eclipse",
      },
      {
        name: "IBM Public Version 1.0",
        short: "IBM",
      },
    ],
  },
  {
    message: "What is your GitHub profile name?",
    type: "input",
    name: "github",
  },
  {
    message: "What contact email would you like to display?",
    type: "input",
    name: "email",
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
// console.log(data);
