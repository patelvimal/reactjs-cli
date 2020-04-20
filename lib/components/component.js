var fs = require('fs');
const chalk = require("chalk");

function createComponent(names, folderName) {
    if (names && !!names.length) {
        const sourceFile = `${__dirname}\\template\\componentTemplate.js`;
        const basePath = `${process.cwd()}\\src\\`;
        var componentFolderName = `${basePath}\\components\\`;

        createFolderIfNotExists(componentFolderName);

        if (folderName) {
            console.log(folderName.indexOf('\\'));
            if (folderName.indexOf('\\') > 0) {
                var nestedFolders = folderName.split('\\');
                if (nestedFolders && !!nestedFolders.length) {
                    componentFolderName =`${basePath}\\`;
                    nestedFolders.forEach(name => {
                        componentFolderName = `${componentFolderName}\\${name}\\`;
                        createFolderIfNotExists(componentFolderName);    
                    });
                }
            } else {
                componentFolderName = `${basePath}\\${folderName}\\`;
                createFolderIfNotExists(componentFolderName);
            }

        }
        var templateContent = fs.readFileSync(sourceFile).toString();
        names.forEach(componentName => {
            var contents = templateContent.replace(/{componentName}/g, componentName);
            fs.writeFileSync(componentFolderName + componentName + '.js', contents);
        });
        console.log(chalk.yellow('Component successfully created!'));
    }
}

function createFolderIfNotExists(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }
}
module.exports = {
    createComponent: createComponent
}
