module.exports = async (Logger, Args)  => {
    Logger.broadcast(Args.join(" "))
}