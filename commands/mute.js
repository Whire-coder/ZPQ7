const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    if(message.member.hasPermission("MANAGE_MESSAGES")) {

        return message.reply(`${cfg.emojiError} **| Cette commande est temporairement désactivée !**`)

        let member = message.mentions.members.first();

        if(member === message.member) return message.reply(`${cfg.emojiError} | **Vous ne pouvez pas vous mute !**`)

        if(!member) return message.reply(`${cfg.emojiError} | **Vous devez spécifier une personne valide !**`);

        if(member.user === bot.user) return message.reply(`${cfg.emojiError} **| Je ne peux pas me mute !**`);

        if(member.user.bot) return message.reply(`${cfg.emojiError} **| Je ne peux pas mute un bot !**`);
        
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Aucune raison spécifiée !";

        message.delete();

        message.channel.send(`${cfg.emojiSucces} **| ${member} a bien été mute | Raison:** *${reason}*`);

        await member.send(`${cfg.emojiMute} **Vous avez été rendu muet de** \`\`${message.guild.name}\`\` **| Raison :** *${reason}*`);

        console.log(`MUTE: ${message.guild.name} (${member.user.username}) => ${reason}`)
        

        } else {
          message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`GERER DES MESSAGES\`\``);
        }

        // Alexandre est bô

}

module.exports.help = {
    name: "mute",
    aliases: [""]
    }