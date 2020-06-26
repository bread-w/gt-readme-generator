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
    // badges added from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    // choices chosen from top 5 of this list: https://www.synopsys.com/blogs/software-security/top-open-source-licenses/
    choices: [
      {
        name: "The MIT License",
        value:
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        short: "MIT",
      },
      {
        name: "Apache 2.0 License",
        value:
          "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        short: "Apache",
      },
      {
        name: "GNU GPL v3",
        value:
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        short: "GNU 3.0",
      },
      {
        name: "GNU GPL v2",
        value:
          "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
        short: "GNU 2.0",
      },
      {
        name: "BSD 3-Clause License",
        value: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        short: "BSD 3-C",
      },
      {
        name: "Mozilla Public License 2.0",
        value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        short: "Mozilla",
      },
      {
        name: "ISC License",
        value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
        short: "ISC",
      },
      {
        name: "The Perl License",
        value: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
        short: "Perl",
      },
      {
        name: "Eclipse Public License 1.0",
        value: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        short: "Eclipse",
      },
      {
        name: "IBM Public License Version 1.0",
        value: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
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
