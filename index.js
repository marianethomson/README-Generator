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
      type: "list",
      name: "license",
      message: "What the license you want to apply?",
      choices: ["MIT", "ISC", "GNU", "CCO", "Mozilla", "Eclipse", "Apache"],
      filter(val) {
        return val.toUpperCase();
      },
    },
    {
      type: "input",
      name: "tests",
      message: "Please inform instructions for testing:",
    },
    {
      type: "input",
      name: "email",
      message: "Please inform your email:",
    },
    {
      type: "input",
      name: "username",
      message: "Please inform your GitHub username:",
    },
    {
      type: "input",
      name: "repo",
      message: "Please inform your Repository name:",
    },
  ]);
};

function writeToFile(filename, data) {
  return fs.writeFileSync(filename, data);
}

// TODO: Create a function to initialize app
const init = () => {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) =>
      writeToFile("sampleREADME.md", genMarkdown.generateMarkdown(answers))
    )
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
