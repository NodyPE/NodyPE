module.exports = async (server, Logger) => {
server.on('connection', client => {
    client.on('login', () => {
        require("./player/PlayerJoinEvent.js")(client, Logger)
    })
})
}