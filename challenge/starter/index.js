const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name:'description',
        message: 'What is your project about? Please write a brief description.'
    },
    {
        type: 'editor',
        name:'tableOfContent',
        message: 'What is your table of content? List them in bullet points.'
    },
    {
        type: 'Input',
        name:'installation',
        message: 'How should the user install your project locally?'
    },
    {
        type: 'Input',
        name:'usage',
        message: 'How to use your project after the users installed it?'
    },
    {
        type: 'Input',
        name:'Contributing',
        message: 'Do you have any specific contribution preferences?'
    },
    {
        type: 'list',
        name:'license',
        message: 'Which license did you use?',
        choices: ['MIT License', 'GNU GPLv3', 'Creative Commons']
     
    }
    ]
;    

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
