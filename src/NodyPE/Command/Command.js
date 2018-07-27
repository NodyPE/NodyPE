module.exports = async (config, Logger, default_Aliases) => {
const readline = require('readline');
var fs = require("fs")

waitForCommand()
var chalk = require("chalk")
async function waitForCommand() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(``, async (answer) => {

        const args = answer.trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        try {
            if (default_Aliases[command]) {
                require("./defaults/" + default_Aliases[command].Handler)(Logger, args)
            } else {
                Logger.error(`The command "${command}" does not exist! Use ? for a list of commands.`)

            }
        } catch(error) {
            Logger.error(`There was an error executing command "` + command + `"`)
            Logger.error(error)
        }


        await rl.close();
        await waitForCommand();
    })
}}