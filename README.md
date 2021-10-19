# README-Generator

## Purpose

The README Generator is a Command-Line Application that generates a high-quality README in a quick and consistent manner, giving the developer more time to focus on their application and producing relevant documentation in a fast way. The application runs a template and prompts the developer to answer via command-line. At the end of the process, such input will generate the README file.

## Technologies

The README Generator was developed in Javascript and NodeJS

## External Dependencies

This application uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

To install please run

```bash
npm install
```

from the root folder, after downloading the Repo.

. Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain.

The application will be invoked by using the following command:

```bash
node index.js
```

Because this application won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates its functionality. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer. You’ll need to submit a link to the video _and_ add it to the README of your project.

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Getting Started

Here are some guidelines to help you get started:

- Make sure that your repo includes a `package.json` with the required dependencies. You can create one by running `npm init` when you first set up the project, before installing any dependencies.

- Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

- Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.

### Walkthrough Video: 27%

- A walkthrough video that demonstrates the functionality of the README generator must be submitted, and a link to the video should be included in your README file.

- The walkthrough video must demonstrate how a user would invoke the application from the command line.

- The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

- The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

You are required to submit the following for review:

- A walkthrough video demonstrating the functionality of the application.

- A sample README.md file for a project repository generated using your application

- The URL of the GitHub repository, with a unique name and a README describing the project
