const RakNet = require('nodype-raknet')
const fs = require("fs")
const Logger = require("./src/NodyPE/Utils/Logger.js")
const NodyPE = require("./src/NodyPE/NodyPE.js")
const configUT = require("./src/NodyPE/Utils/Config.js")

if(configUT.getConfig(Logger, "server.properties.json")){
    configUT.createConfig(Logger, "server.properties.json", true)
}
load()
async function load() {

    var start = new Date()
    const config = await configUT.getConfig(Logger, "server.properties.json")

    const parser = RakNet.createDeserializer()

    NodyPE.handleBooting(config, Logger, RakNet)
    NodyPE.loadCommands(config, Logger, RakNet, start)
}