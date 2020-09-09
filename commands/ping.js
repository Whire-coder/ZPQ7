const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    let msg = await message.channel.send("*Calcul de votre ping en cours...*")
        let ping = (msg.createdTimestamp - message.createdTimestamp - bot.ws.ping) /2 + " ms";
            msg.edit(":ping_pong: Pong ! " + `\`${ping}\`` + " **ms**");

      console.log(`PING: ${message.author.username}`);


}

module.exports.help = {
    name: "ping",
    aliases: [""]
    }