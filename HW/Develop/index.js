// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description for the project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is the installation needed for this application?',
    },
    {
      type: 'input',
      name: 'interact',
      message: 'How will the user interact with the application?',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license was used for the application?',
      choices: ["a","b","c"]
    },
    {
      type: 'input',
      name: 'contributors',
      message: 'Are there any other contributors?',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'What are the test instructions for this application?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username for contact?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address for questions?',
    },
  ]);
};

const generateHTML = (answers) =>
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

  ### License
    ${answers.license}

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
  
  
  ## Code Examples
  Show examples of usage:
  `put-your-code-here`
  
  ## Questions
  ${answers.questions}
  `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('README.md',generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();






// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
