const chalk = require("chalk");
function assert(desc, condition) {
  if (condition) {
    console.log(chalk.green(desc, ' passed'));
  } else {
    console.log(chalk.red(desc, ' error'));
  }
}
function describle(desc, callback) {
  console.log(chalk.blue(desc));
  callback();
}
module.exports = { describle, assert }