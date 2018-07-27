var fs = require('fs')

const MAIN_DIRECTORY = "./"

const CONFIG_ERROR_LOADING = "There was an error loading that config!"

module.exports.createConfig = async (Logger, fileName, isResource, contents) => {
    if(isResource){
        try {
            var filecontents = await JSON.parse(fs.readFileSync("./src/NodyPE/Resources/" + fileName))
            await fs.writeFile(MAIN_DIRECTORY + fileName, JSON.stringify(filecontents, null, 4), (err) => {
                if (err) console.error(err);
            });

        } catch (e) {
            Logger.error(e)
        }
    } else {
        try {
            fs.writeFile(MAIN_DIRECTORY + fileName, contents)
        } catch (e) {
            Logger.error(e)
        }
    }
}
module.exports.getConfig = async (Logger, fileName) => {
    try {
        var filecontents = await fs.readFileSync(MAIN_DIRECTORY + fileName)
    } catch (e) {
        return "no"
    }
    return JSON.parse(filecontents)
}