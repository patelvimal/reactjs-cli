#!/usr/bin/env node
var figlet = require('figlet');
const chalk = require("chalk");
const program = require('commander');
const app = require('../lib/app/app');
const appComponent = require('../lib/components/component');
const version = require('../lib/version');

if (process.argv && process.argv.length === 2) {
  console.log(chalk.yellow(figlet.textSync('reactApp-cli', { horizontalLayout: 'full' })));
  console.log(chalk.yellow('A CLI for creating react project/components.'));
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
  .command('add <name>')
  .description('Add a new component into React Application')
  .action((name) => {
    addComponent(name);
});

program.parse(process.argv);

function createApp(name){
  app.createApp(name);
}

function addComponent(name){
  appComponent.createComponent(name);
}