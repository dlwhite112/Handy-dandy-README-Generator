// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateREADME = require("./utils/generateMarkdown")


const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a brief description for the project.",
    },
    {
      type: "input",
      name: "installation",
      message: "What is the installation needed for this application?",
    },
    {
      type: "input",
      name: "interact",
      message: "How will the user interact with the application?",
    },
    {
      type: "list",
      name: "license",
      message: "What license was used for the application?",
      choices: ["IBM", "MIT", "ISC"],
    },
    {
      type: "input",
      name: "contributors",
      message: "Are there any other contributors?",
    },
    {
      type: "input",
      name: "instructions",
      message: "What are the test instructions for this application?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username for contact?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address for questions?",
    },
  ]);
};
  



//Function to write README file
// const generateREADME = (answers) =>
//   `# ${answers.title} 
//   > Description : ${answers.description}
  
//   ## Table of contents
//   * [General info](#general-info)
//   * [Screenshots](#screenshots)
//   * [Tools](#technologies)
//   * [Setup](#setup)
//   * [Questions](#Questions)
  
  
//   ## General info : 

//   ### Installation 
//     ${answers.installation}

//   ### Usage
//     ${answers.interact}

//   ${renderLicenseSection(answers.license)}

//   ### Contributing
//     ${answers.contributors}

//   ### Tests
//     ${answers.instructions}
  
  
//   ## Screenshots

  
  
//   ## Tools
//   * Tech 1 - version 1.0
//   * Tech 2 - version 2.0
//   * Tech 3 - version 3.0
  
//   ## Link
  
  
  
//   ## Questions
//   Please see my GitHub: https://github.com/${answers.github}
//   You can ask me questions here: ${answers.email}
//   `;

//  Function to initialize app
const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync("README.md", generateREADME(answers)))
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
};
// Function call to initialize app
init();









