const RakNet = require('nodype-raknet')
const config = require("./server.properties.json")
const Logger = require("./src/NodyPE/Utils/Logger.js")
const NodyPE = require("./src/NodyPE/NodyPE.js")

NodyPE.handleBooting(config, Logger, RakNet)
