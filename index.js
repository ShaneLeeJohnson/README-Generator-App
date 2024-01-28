// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of what your project is for'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'If necessary, please describe the steps needed to install your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for how a user would use your project and some examples of your project in use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you want others to be able to contribute to your project, provide those guidelines here'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you have any tests written for your application provide examples for how to run them here'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU GPL v3.0', 'MIT License', 'Boost Software License 1.0', 'Eclipse Public License 2.0', 'GNU AGPL v3.0', 'GNU LGPL v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('README file generated successfully!')
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
