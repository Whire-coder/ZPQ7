const Discord = require("discord.js");
const mc = require('minecraft-api');
const MojangAPI = require('mojang-api');

module.exports.run = async (bot, message, args, cfg) => {  

    
    let dev = await bot.users.fetch('709481084286533773');
    let dev2 = await bot.users.fetch('428949443304488980'); 

    let skin = message.content.split(' ').splice(1).join(' ');

    if (!skin) return message.reply(`${cfg.emojiError} **| Veuillez entrer un nom d'utilisateur valide !**`);
        

    if(skin) {

      let ud = await mc.uuidForName(skin)

      if(ud == null) return message.reply(`${cfg.emojiError} **| Le joueur \`${skin}\` n'existe pas    !**`)

      const embed = new Discord.MessageEmbed()
      .setTitle(`**__» ${skin}__**`)
      .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
      .setDescription(`**${ud}**`)      
      .setColor("RANDOM")
      .setImage("https://minotar.net/armor/body/" + skin + "/100.png")
      .setFooter(`Bot développé par : ${dev.username} & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)   

      message.channel.send(embed);
      console.log(`SKIN: ${message.author.username}`);


    }

}

module.exports.help = {
    name: "skin",
    aliases: [""]
    }