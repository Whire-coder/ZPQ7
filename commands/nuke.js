const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

      if(message.member.hasPermission("MANAGE_CHANNELS") && message.member.hasPermission("MANAGE_MESSAGES")) {

      const position = message.channel.position;
      const newChannel = await message.channel.clone();
      await message.channel.delete();
      newChannel.setPosition(position);

      newChannel.send(`${cfg.emojiNuke}** ⋙ Channel nuke par ${message.author} !**`)

      console.log(`NUKE: ${message.guild.name} (${message.author.username})`);

      } else {
            message.channel.send(`${cfg.emojiError} **| Vous n'avez pas les permissions \`\`GERES LES MESSAGES\`\` & \`\`GERER LES SALONS\`\`**`)
      }

      }


module.exports.help = {
    name: "nuke",
    aliases: [""]
    }