const RakNet = require('nodype-raknet')
const config = require("./server.properties.json")
const Logger = require("./src/NodyPE/Utils/Logger.js")
const NodyPE = require("./src/NodyPE/NodyPE.js")
const parser = RakNet.createDeserializer()

NodyPE.handleBooting(config, Logger, RakNet)
NodyPE.loadCommands(config, Logger, RakNet)
