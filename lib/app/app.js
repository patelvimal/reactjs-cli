var fs = require('fs');
var fse = require('fs-extra');
const cmd = require('child_process');
const ora =require('ora');
const inquirer = require('inquirer');

function createApp(name) {
    const sourceDir = `${__dirname}\\template`;
    const destDir = `${process.cwd()}\\${name}`;

    inquirer.prompt(questions).then(answers=> {
        var projectTypePackages = projectType[answers.project_type];
        
        createFolder(name).then(result=> {
            if(result){
                createTemplate(sourceDir,destDir,projectTypePackages);
            }
        });
    });

}

function createFolder(folderName) {
    return new Promise((resolve,reject) => {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
            resolve(true);
        } else {
            inquirer.prompt({    
                type: 'confirm',    
                name: 'confirmation',    
                message: `${folderName} folder already exist, Would you like to still proceed?`,    
                default: true  
            }).then((result)=>{
               resolve(result.confirmation);
            }); 
        }
    })
    
}

const questions = [
    {
        name: "project_type",
        type: "list",
        message: "Please select a project type?",
        choices: [
            {value:"Basic",name:"Basic"},
            {value:"MaterialUI",name:"Basic + Material-UI"},
            {value:"Boostrap",name:"Basic + Bootstrap"}
        ]
    }
];

const createTemplate = (sourceDir,destDir,packages)=> {
    const spinner = ora({ text: 'Please wait...', spinner: 'earth', color:'yellow' }).start(); 
    //copy template files to new folder
    fse.copy(sourceDir, destDir, function (err) {
        if (err) {
            console.error(err);
        } else {
            spinner.succeed('Template created, react library installing...');
            const installPackages = 'react react-dom ' + packages;
            depReactChild = cmd.spawn('npm install ' + installPackages, { cwd: destDir, shell: true });
            depReactChild.on('exit', () => {
                spinner.succeed('React library installed, npm installing...');
                depChild = cmd.spawn('npm install', { cwd: destDir, shell: true });
                depChild.on('exit', () => {
                    spinner.stop();
                    spinner.succeed('Your project is created successfully');
                });
            });
           
        }
    }); 
}


const projectType = {
    "Basic" : '',
    "MaterialUI": '@material-ui/core @material-ui/icons',
    "Boostrap": 'react-bootstrap bootstrap'
}
module.exports = {
    createApp: createApp
}