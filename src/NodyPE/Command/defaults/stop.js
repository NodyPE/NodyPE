module.exports = async (Logger, Args)  => {
    await Logger.info("Stopping NodyPE")
    await Logger.info("Saving worlds")
    await Logger.info("Killing RakNet interface")
    process.exit()
}