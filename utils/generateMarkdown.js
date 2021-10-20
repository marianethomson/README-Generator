// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ## Description

    ${data.description}
    
    ## Table of Contents

    - [Installation](##installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](#license)

    ### Installation
    
    ${data.install}

    ### Usage
    
    ${data.usage}

    ### Contribution
    
    ${data.contribution}

    ### Tests

    ${data.tests}

    ### Questions

    If you have any questions, feel free to contact me at ${data.email} or via my GitHub ${data.username}.

    ### License
    
    This application is licensed under the terms and conditions of ${data.license}`;
}

module.exports = { generateMarkdown };
