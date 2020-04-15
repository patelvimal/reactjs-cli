#!/usr/bin/env node
var figlet = require('figlet');

figlet('ReactJS-Cli',{
    font: 'doom',
    horizontalLayout: 'universal smushing',
    verticalLayout: 'universal smushing'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});