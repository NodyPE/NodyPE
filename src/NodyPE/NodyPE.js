
module.exports.handleBooting = async (config, Logger, RakNet) => {

    Logger.info("Loading components")
    const server = await RakNet.createServer({
        host: '0.0.0.0',
        port: parseInt(config.Server_Port)
    }, config.MOTD, '1.0.5')
        await Logger.info('Server started on port: ' + config.Server_Port)
    server.on('connection', client => {
        client.on('login', () => {
            Logger.info(client.name + " joined! [" + client.address + "]")
        })
    })};