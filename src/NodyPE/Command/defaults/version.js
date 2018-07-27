
module.exports = async (Logger, Args)  => {
    var Net = require("../../Network/Network.js")
    var chalk = require("chalk")
    await Logger.clean(chalk.blue("This server is running NodyPE ") + chalk.green(Net.NODYPE_VERSION))
}