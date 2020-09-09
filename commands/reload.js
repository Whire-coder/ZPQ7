const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

if(message.author.id === '709481084286533773') {
    message.delete()
    await message.channel.send(`${cfg.emojiSucces} **Bot successfully reloaded !**`)
      console.log(`RELOAD: ${message.author.username}`);
    process.exit();

  } else {
    message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`BOT OWNER\`\``)  }

}

module.exports.help = {
  name:"reload",
  aliases: ['r', 'rl']
}