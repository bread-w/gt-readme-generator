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
\u0060\u0060\u0060
This project is being licensed under the ${data.license} license.
\u0060\u0060\u0060
## Description
\u0060\u0060\u0060md
${data.description}
\u0060\u0060\u0060
## Installation
\u0060\u0060\u0060
${data.installation}
\u0060\u0060\u0060
## Usage
\u0060\u0060\u0060
${data.usage}
\u0060\u0060\u0060
## Contributing
\u0060\u0060\u0060
${data.contributing}
\u0060\u0060\u0060
## Tests
\u0060\u0060\u0060
${data.tests}
\u0060\u0060\u0060
## Questions
\u0060\u0060\u0060
If you have any questions, follow my GitHub profile here: https://github.com/${data.github}.

You can also email me at ${data.email}.
\u0060\u0060\u0060
`;
}

module.exports = generateMarkdown;
