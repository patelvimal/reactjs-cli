var fs = require('fs');
var fse = require('fs-extra');
const cmd = require('child_process');
const ora =require('ora');

function createApp(name) {
    const sourceDir = `${__dirname}\\template`;
    const destDir = `${process.cwd()}\\${name}`;
    
    //if folder does not exist create
    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
    }

    const spinner = ora({ text: 'Please wait...', spinner: 'earth' }).start(); 

    //copy template files to new folder
    fse.copy(sourceDir, destDir, function (err) {
        if (err) {
            console.error(err);
        } else {
            depChild = cmd.spawn('npm install react react-dom && npm install', { cwd: destDir, shell: true });
            depChild.on('exit', () => {
                spinner.stop();
                spinner.succeed('Your project is created successfully.\n');
            });
            //executeCommand('npm install react react-dom', { cwd: destDir, shell: true });
            //executeCommand('npm install', { cwd: destDir, shell: true });
            
        }
    }); 
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