// TODO: Include packages needed for this application
// done

// TODO: Create an array of questions for user input
const inquirer = require ('inquirer');
const questions = [
    {

    type: 'input',
    name: 'name',
    message: 'what is your name?'

    },
    {

    type: 'confirm',
    name: 'dev',
    message: 'are you a developer?'

    },
    {

    type: 'input',
    name: 'age',
    message: 'what year were you born in?'


    },
    {
    type: 'list',
    name: 'confirm',
    message: 'The sky is blue',
    default: true
    }
];

inquirer.prompt(questions)
    .then(answers => {
        console.log('Answers', answers);
    })
    .catch(error => {
        console.log('Error', error);
    })



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const fs = require ('fs');

fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
