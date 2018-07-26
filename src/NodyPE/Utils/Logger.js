var chalk = require("chalk")
var prefix = "NodyPE > "
module.exports.error = async (log) => {
    console.log(chalk.magenta(prefix) + chalk.red(log))
}
module.exports.info = async (log) => {
    console.log(chalk.magenta(prefix) + chalk.blue(log))
}
module.exports.debug = async (log) => {
    console.log(chalk.magenta(prefix) + chalk.white(log))
}
module.exports.warning = async (log) => {
    console.log(chalk.magenta(prefix) + chalk.yellow(log))
}

module.exports.broadcast = async (log) => {
    console.log(chalk.yellow(log))
}
module.exports.normal = async (log) => {
    console.log(log)
}