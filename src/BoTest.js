const chalk = require("chalk");
function assert(desc, condition) {
  if (condition) {
    console.log(chalk.green(desc, ' passed'));
  } else {
    console.log(chalk.red(desc, ' error'));
  }
}
function test(callback) {
  callback();
}
module.exports = { test, assert }