// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "IBM"){
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]"
  }
  if(license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
  }
  if(license == "ISC"){
    return "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)]"
  } else return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)"
  }
  if (license == "MIT") {
    return "(https://opensource.org/icenses/MIT)"
  }
  if (license == "ISC") {
    return "(https://opensource.org/licenses/ISC)"
  } else return ""

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === license){
    return `### License
  ${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  } else return ""

}
// TODO: Create a function to generate markdown for README
const generateREADME = (answers) =>
  `# ${answers.title} 
  > Description : ${answers.description}
  
  ## Table of contents
  * [General info](#general-info)
  * [Screenshots](#screenshots)
  * [Tools](#technologies)
  * [Setup](#setup)
  * [Questions](#Questions)
  
  
  ## General info : 

  ### Installation 
    ${answers.installation}

  ### Usage
    ${answers.interact}

  ${renderLicenseSection(answers.license)}

  ### Contributing
    ${answers.contributors}

  ### Tests
    ${answers.instructions}
  
  
  ## Screenshots

  
  
  ## Tools
  * Tech 1 - version 1.0
  * Tech 2 - version 2.0
  * Tech 3 - version 3.0
  
  ## Link
  
  
  
  ## Questions
  Please see my GitHub: https://github.com/${answers.github}
  You can ask me questions here: ${answers.email}
  `;
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
console.log(renderLicenseSection("IBM"))
module.exports = generateREADME;
