var fs = require('fs');
var fse = require('fs-extra');



function createApp(name) {
    const sourceDir = `${__dirname}\\template`;
    const destDir = `${process.cwd()}\\${name}`;

    //if folder does not exist create
    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
    }

    //copy template files to new folder
    fse.copy(sourceDir, destDir, function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log("success!");
        }
    }); 
}


module.exports = {
    createApp: createApp
}