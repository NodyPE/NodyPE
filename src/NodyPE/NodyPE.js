var fs = require("fs")
var Net = require('./Network/Network.js')

module.exports.handleBooting = async (config, Logger, RakNet) => {
    Logger.green(await fs.readFileSync("./src/NodyPE/Resources/logo.txt"))
    Logger.debug("Loading components....")
    const server = await RakNet.createServer({
        host: '0.0.0.0',
        port: parseInt(config.Server_Port)
    }, config.MOTD, Net.MCPE_VERSION)

    require("./Events/EventLoader.js")(server, Logger)
}

module.exports.loadCommands = async (config, Logger, RakNet, start) => {
    var default_Elements = await JSON.parse(fs.readFileSync("./src/NodyPE/Resources/Default_Commands.json"))
    var default_Aliases = {};

    default_Elements.forEach( function (element) {
        default_Aliases[element.Command] = {
            "Handler": element.Handler
        }
        element.Aliases.forEach( function (alias) {
            default_Aliases[alias] = {
                "Handler": element.Handler
            }
        })
    })
    require("./Command/Command.js")(config, Logger, default_Aliases)

    await Logger.debug("Loaded Commands")
    var end = new Date() - start;
    await Logger.info("All components have been loaded! Took " + end + " miliseconds!")
    await Logger.info('Server started on  ' + config.HOST +":" + config.Server_Port + " type '?' for a list of commands")
}