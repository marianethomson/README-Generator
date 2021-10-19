const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("../README-Generator/utils/generateMarkdown");

// Array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe your application:",
    },
      {
      type: "input",
      name: "install",
      message: "Please inform installation instructions:",
    },
     {
      type: "input",
      name: "usage",
      message: "Please inform usage instructions:",
    },
     {
      type: "input",
      name: "contribution",
      message: "Please inform contribution guidelines:",
    },
    {
    type: 'list',
    name: 'license',
    message: 'What the license you want to apply?',
    choices: ['MIT', 'ISC', 'GNU'],
    filter(val) {
      return val.toUpperCase();
    },
  },
  ]);
};

// TODO: Create a function to write README file
function writeToFile({}) => 
    `# ${title}

    ${description}
    
    ## Table of Contents

    ### Installation
    
    ${install}

    ### Usage
    
    ${usage}

    ### Contribution Guidelines
    
    ${contribution}

    ### Tests

    ### Questions

    ### License
    `

// TODO: Create a function to initialize app
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync("README.md", writeToFile(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
