// function to generate markdown for README


function generateMarkdown(data) {
  return `# ${data.title}

<img src="https://img.shields.io/badge/license-${data.license}-red"/>

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## License
This project is being licensed under the ${data.license} license.

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, follow my GitHub profile here: https://github.com/${data.github}.
You can also email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
