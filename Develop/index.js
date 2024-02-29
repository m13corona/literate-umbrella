// TODO: Include packages needed for this application
// done

// TODO: Create an array of questions for user input
const inquirer = require ('inquirer');
const questions = [

    {
    type: 'input',
    name: 'projectTitle',
    message: 'what is the title of your project?'
    },

    {
    type: 'input',
    name: 'description',
    message: 'enter app description'
    },
    {
    type: 'input',
    name: 'installationInstructions',
    message: 'enter installation instructions'
    },
    {
    type: 'input',
    name: 'usageInfo',
    message: 'enter usage info'
    },
    {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'enter contribution guidelines'
    },
    {
    type: 'input',
    name: 'testInstructions',
    message: 'enter test instructions'
    },
    {
    type: 'list',
    name: 'license',
    message: 'choose a license',
    choices: ['MIT', 'ISC', 'Unlicense']
    },
    {
    type: 'input',
    name: 'GitHub',
    message: 'enter Github username'
    },
    {
    type: 'input',
    name: 'email address',
    message: 'enter your email address'
    },
];

inquirer.prompt(questions)
   .then(answers => {
        console.log('Answers', answers);
    })
    .catch(error => {
        console.log('Error', error);
    })



// TODO: Create a function to write README file
const fs = require ('fs');
function writeToFile('README.md', data) {

}





// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
