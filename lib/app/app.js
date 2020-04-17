var fs = require('fs');
var fse = require('fs-extra');

const sourceDir = 'template';

function createApp(name) {
    const destDir = `${__dirname}/${name}`;

    console.log("App Created:-" + name + "at:-" + __dirname);

    if (!fs.existsSync(name)) {
        fs.mkdirSync(name);
    }

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