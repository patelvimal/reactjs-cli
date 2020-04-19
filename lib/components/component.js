var fs = require('fs');
const chalk = require("chalk");

function createComponent(name) {
    const sourceFile = `${__dirname}\\template\\componentTemplate.js`;
    const componentFolderName = `${process.cwd()}\\src\\components\\`;

    if (!fs.existsSync(componentFolderName)) {
        fs.mkdirSync(componentFolderName);
    }

    var contents = fs.readFileSync(sourceFile).toString().replace(/{componentName}/g, name);
    fs.writeFileSync(componentFolderName+ name + '.js', contents);
    console.log(chalk.yellow('Component successfully created!'));

}


module.exports = {
    createComponent: createComponent
}
