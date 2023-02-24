import inquirer from 'inquirer';
import fs from 'fs';

inquirer.prompt([
    {
        type: 'input',
        message: 'what is your name?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'where are you located?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Write a bit about yourself...',
        name: 'bio'
    },
    {
        type: 'input',
        message: 'please provide a Linkedin URL',
        name: 'linkedIn'
    },
    {
        type: 'input',
        message: 'please provide a Github URL',
        name: 'userName'
    },
]).then((data) => {
    fs.writeFile()
});

