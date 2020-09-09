const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

if(message.member.hasPermission("KICK_MEMBERS")) {

    message.delete();

    let member = message.mentions.members.first() ;

    if(!member)
      return message.reply(`${cfg.emojiError} | **Vous devez spécifier une personne valide !**`);
    if(!member.kickable)
      return message.reply(`${cfg.emojiError} | **Je ne peux pas kick cette personne !**`);

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison spécifié";

    await member.send(`:exclamation: **Vous avez été éxpulsé de** \`\`${message.guild.name}\`\` **| Raison :** *${reason}*`);

    await member.kick(reason)
      .catch(error => message.reply(`Je ne peux expulser ${message.author} car : ${error}`));
    message.channel.send(`${cfg.emojiSucces} | **${member.user.tag} a bien été éxpulsé | Raison :** *${reason}*`);
    console.log(`KICK: ${message.author.username}`);

    } else {
      message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`EXPULSER DES MEMBRES\`\``);
    }

}

module.exports.help = {
    name: "kick",
    aliases: [""]
    }