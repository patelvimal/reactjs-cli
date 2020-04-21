react-cli-app
=========

## Installation

    npm install -g react-cli-app

## Usage

    Usage: react-cli-app [command] [arguments]

    Options:
        -v, --version        output the version number
        -h, --help           output usage information

    Commands:
        new <name>                        Create a new React Application
        add [options] <name1> [name2...]  Add a new component into React Application
        help [command]                    display help for command

## Examples

Create new react Application

    react-cli-app new sampleApp


Add new component to existing React application:-

    react-cli-app add header

You can add multiple components at once:-

    react-cli-app add header footer navbar

To add component to particular folder:-

    react-cli-app navbar -fn navigation    

To add component to nested folder:-

    react-cli-app navbar -fn common\\navigation