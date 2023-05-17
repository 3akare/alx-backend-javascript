#!/usr/bin/env node

function displayMessage (params) {
  process.stdout.write(params);
}

module.exports = displayMessage;
