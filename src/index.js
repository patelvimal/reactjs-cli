#!/usr/bin/env node
var figlet = require('figlet');

figlet('Hello World!!asdasdasd', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});