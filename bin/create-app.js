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

console.log(helpText)
program
  .version('0.0.1')
  .description("An example CLI for ordering pizza's")
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

