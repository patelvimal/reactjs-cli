var fs = require('fs');
var fse = require('fs-extra');
const cmd = require('child_process');
const ora =require('ora');
const inquirer = require('inquirer');

function createApp(name) {
    const sourceDir = `${__dirname}\\template`;
    const destDir = `${process.cwd()}\\${name}`;
    
    createFolder(name).then(result=> {
        if (result) {
            const spinner = ora({ text: 'Please wait...', spinner: 'earth', color:'yellow' }).start(); 
            
            //copy template files to new folder
            fse.copy(sourceDir, destDir, function (err) {
                if (err) {
                    console.error(err);
                } else {
                    spinner.succeed('Template created, react library installing...');
                    depReactChild = cmd.spawn('npm install react react-dom', { cwd: destDir, shell: true });
                    depReactChild.on('exit', () => {
                        spinner.succeed('React library installed, npm installing...');
                        depChild = cmd.spawn('npm install', { cwd: destDir, shell: true });
                        depChild.on('exit', () => {
                            spinner.succeed('Your project is created successfully');
                        });
                    });
                   
                }
            }); 
        }
    })
}

function createFolder(folderName) {
    return new Promise((resolve,reject) => {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
            return new Promise(resolve => {
                resolve(true);
            });
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


function executeCommand(command,options, callback) {
    cmd.execSync(command,options,function(error,stdout,stderr){ 
        if (callback && callback =='function') {
            callback(stdout);
        }
    });
}

module.exports = {
    createApp: createApp
}