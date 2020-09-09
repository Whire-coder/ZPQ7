const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    if(message.member.hasPermission("ADMINISTRATOR")) {

      return message.reply(`${cfg.emojiError} **| Cette commande est temporairent désactivée !**`)

        guildConf[message.guild.id].prefix = args[0]; 

        if(!newP) return message.reply(`${cfg.emojiError} | **Vous devez spécifier un prefix**`)

        if (!guildConf[message.guild.id].prefix) {
          guildConf[message.guild.id].prefix = cfg.prefix; 
          message.channel.send(`${cfg.emojiSucces} | **Le prefix du bot est désormais :**  \`${cfg.prefix}\``)
        }

        /*message.channel.send(`${cfg.emojiSucces} | **Le prefix du bot est désormais :**  \`${newP}\``)
        cfg.prefix = newP;*/

        fs.writeFile('./storages/guildConf.json', JSON.stringify(guildConf, null, 2), (err) => {
          if (err) console.log(err)
     })
      console.log(`SETPREFIX: ${message.author.username}`);


      } else {
        message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`ADMINISTRATOR\`\``);
      }

}

module.exports.help = {
    name: "setprefix",
    aliases: [""]
    }