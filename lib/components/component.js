var fs = require('fs');

function createComponent(name) {
    const sourceFile = `${__dirname}\\template\\componentTemplate.js`;
    const componentFolderName = `${process.cwd()}\\src\\components\\`;

    if (!fs.existsSync(componentFolderName)) {
        fs.mkdirSync(componentFolderName);
    }

    var contents = fs.readFileSync(sourceFile).toString().replace(/{componentName}/g, name);
    fs.writeFileSync(componentFolderName+ name + '.js', contents);
}


module.exports = {
    createComponent: createComponent
}
