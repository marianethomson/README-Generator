function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case "ISC":
      return `[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)]`;
    case "GNU":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
    case "MOZILLA":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
    case "ECLIPSE":
      return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
    case "CCO":
      return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]`;
    case "APACHE":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)]`;
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `(https://opensource.org/licenses/MIT)`;
    case "ISC":
      return `(https://opensource.org/licenses/ISC)`;
    case "GNU":
      return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case "MOZILLA":
      return `(https://opensource.org/licenses/MPL-2.0)`;
    case "ECLIPSE":
      return `(https://opensource.org/licenses/EPL-1.0)`;
    case "CCO":
      return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
    case "APACHE":
      return `(https://opensource.org/licenses/Apache-2.0)`;
    default:
      return "";
  }
}

function renderLicenseSection(license, username, repo) {
  if (license === "") {
    return "";
  } else {
    return `https://https://github.com/${username}/${repo}#license`;
  }
}

function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseImg = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(
    data.license,
    data.username,
    data.repo
  );
  return ` 
  ${licenseImg}${licenseLink}

  # ${data.title}

    ## Description

    ${data.description}
    
    ## Table of Contents

    - [Installation](##installation)
    - [Usage](#usage)
    - [Contribution](#contribution)
    - [Tests](#tests)
    - [Questions](#questions)
    - [License](${licenseSection})

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
