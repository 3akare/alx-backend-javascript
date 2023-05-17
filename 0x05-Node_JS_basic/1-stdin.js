const readline = require('readline');

// Create the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  process.stdout.write(`Your name is: ${name}`);
  if (!process.stdin.isTTY) {
    process.stdout.write('\nThis important software is now closing');
  }
  rl.close();
});
