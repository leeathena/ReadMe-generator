const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'editor',
        name:'description',
        message: 'What is your project about? Please write a brief description.'
    },
 
    {
        type: 'input',
        name:'installation',
        message: 'How should the user install your project locally?'
    },
    {
        type: 'input',
        name:'usage',
        message: 'How to use your project after the users installed it?'
    },
    {
        type: 'input',
        name:'contributing',
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
function sanitizeTitle(title) {
    return title.replace(/[^a-zA-Z0-9]/g, '_'); // Replace non-alphanumeric characters with underscores
}

function writeToFile(fileName, data, title) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.error(`There was an error occurred while writing to ${title}:`, err);
        }
        console.log(`${title} was created successfully`);
    });
}


// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdownContent = generateMarkdown(answers);
        const sanitizedTitle = sanitizeTitle(answers.title);
        const fileName = `${sanitizedTitle}.md`; // Create a filename based on the title
        writeToFile(fileName, markdownContent, answers.title);
    } catch (error) {
        console.error('Failed to generate README:', error);
    }
}




// function call to initialize program
init();
