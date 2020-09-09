const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    if(message.member.hasPermission("BAN_MEMBERS")) {

	message.delete();

        let member = message.mentions.members.first() ;

        if(!member)
          return message.reply(`${cfg.emojiError} | **Vous devez spécifier une personne valide !**`);
        if(!member.bannable)
          return message.reply(`${cfg.emojiError} | **Je ne peux pas bannir cette personne !**`);

        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Aucune raison spécifié";

        await member.send(`${cfg.emojiBan} **Vous avez été bannis de** \`\`${message.guild.name}\`\` **| Raison :** *${reason}*`);

        await member.ban({reason: reason})
          .catch(error => message.reply(`Je ne peux bannir ${message.author} car : ${error}`));
        message.channel.send(`${cfg.emojiSucces} | **${member.user.tag} a bien été bannis | Raison :** *${reason}*`);
             console.log(`BAN: ${message.author.username}`);


        } else {
          message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`BANNIR DES MEMBRES\`\``);
        }

}

module.exports.help = {
    name: "ban",
    aliases: [""]
    }