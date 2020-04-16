#!/usr/bin/env node
var figlet = require('figlet');
const chalk = require("chalk");
const program = require('commander');

console.log(chalk.yellow(figlet.textSync('reactjs-cli', { horizontalLayout: 'full' })));
console.log(chalk.whiteBright.bgRedBright('A CLI for creating react project/components'));

const version = chalk.whiteBright.bgRedBright('version:- 1.0.0');
console.log(version);

const helpText = `
    How to Use:-
    rx [command] -option

    Example:-
    rx new -a <For creating new application>
    rx new -c <For creating new component>
    rx new -s <For creating new service>
`;

//console.log(helpText)

program
  .version('1.0.0')
  .description('React-js CLI Tool');

program
  .option('-a, --application', 'Add Application')
  .command('new <name>')
  //.alias('-a')
  .description('Create a new React Application')
  .action((name) => {
    createApp(name);
  });


program.parse(process.argv);


function createApp(name){
  console.log(name);
}