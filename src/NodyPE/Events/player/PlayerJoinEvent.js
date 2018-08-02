module.exports = async (client, Logger) => {
    Logger.info(client.name + " joined! [" + client.address + ":" + Client.port + "]")
}