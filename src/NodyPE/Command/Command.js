module.exports = async (config, Logger, RakNet) => {
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
            require(`./defaults/${command}.js`)(Logger, args)

        } catch(error) {
            Logger.error(`The command "${command}" does not exist! Use help for a list of commands.`)
        }


        await rl.close();
        await waitForCommand();
    })
}}