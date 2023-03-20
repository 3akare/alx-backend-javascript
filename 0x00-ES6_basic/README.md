# 0x00 ES6 basics
## Requirements
### General
- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup
### Install NodeJS 12.11.x
(in your home directory):
``` bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

```
``` bash
$ nodejs -v 
v12.11.1
$ npm -v
6.11.3

```

### Install Jest, Babel, ESLint

in your project directory:
- Install Jest using: `npm install --save-dev jest`
- Install babel using: npm install --save-dev babel-jest @babel/core @babel/present-env
- Install ESLint using: npm install --save-dev eslint

## Configuration files
### `package.json`
Click to show/hide file contents
### `babel.config.js`
Click to show/hide file contents
### `.eslintrc.js`
Click to show/hide file contents

## Finally…
Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.