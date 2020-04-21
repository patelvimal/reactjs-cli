#!/usr/bin/env node
var figlet = require('figlet');
const chalk = require("chalk");
const program = require('commander');
const app = require('../lib/app/app');
const appComponent = require('../lib/components/component');
const version = require('../lib/version');

if (process.argv && process.argv.length === 2) {
  console.log(chalk.yellow(figlet.textSync('reactApp-cli', { horizontalLayout: 'full' })));
  console.log(chalk.yellow(' A CLI for creating react project/components.'));
  console.log('');
}

program
  .option('-v, --version', 'output the version number', version)

program
  .name('react-cli')
  .usage('[command] [arguments]')
program
  .command('new <name>')
  .description('Create a new React Application')
  .action((name) => {
    createApp(name);
});

program
  .command('add <name1> [name2...]')
  .option('-fn, --folderName <name>', 'Add component into a particular folder e.g. -fn folderName')
  .description('Add a new component into React Application')
  .action((c1,c2,options) => {
    c2.unshift(c1);
    addComponent(c2,options.folderName);
});

program.parse(process.argv);

function createApp(name){
  app.createApp(name);
}

function addComponent(components,folderName){
  appComponent.createComponent(components,folderName);
}