var fs = require('fs');
const chalk = require("chalk");

function createComponent(names) {
    if (names && !!names) {
        const sourceFile = `${__dirname}\\template\\componentTemplate.js`;
        const componentFolderName = `${process.cwd()}\\src\\components\\`;

        if (!fs.existsSync(componentFolderName)) {
            fs.mkdirSync(componentFolderName);
        }
        var templateContent = fs.readFileSync(sourceFile).toString();
        names.forEach(componentName => {
            var contents = templateContent.replace(/{componentName}/g, componentName);
            fs.writeFileSync(componentFolderName + componentName + '.js', contents);
        });
        console.log(chalk.yellow('Component successfully created!'));    
    }
}


module.exports = {
    createComponent: createComponent
}
