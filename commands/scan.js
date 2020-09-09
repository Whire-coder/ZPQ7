const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

       let dev = await bot.users.fetch('709481084286533773');

       const content = message.content.split(" ").slice(1).join(" ").replace(/</g, '').replace(/>/g, '').replace(/&/g, '').replace(/@/g, '');

       const embedNoRole = new Discord.MessageEmbed()
       .setTitle(`Scan de ${message.guild.name}`)
       .setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
       .setDescription(`\n \n ${cfg.emojiOnline} ${(message.guild.members.cache.filter(member => member.presence.status === "online").size) -1} membres en ligne \n \n ${cfg.emojiInvisible} ${message.guild.members.cache.filter(member => member.presence.status === "offline").size} membres hors-ligne \n \n ${cfg.emojiDnd} ${message.guild.members.cache.filter(member => member.presence.status === "dnd").size} membres a ne pas déranger \n \n ${cfg.emojiIdle} ${message.guild.members.cache.filter(member => member.presence.status === "idle").size} membres innactifs`)
       .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
       .setFooter(`Bot developpe par : ${dev.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)

       if(!content) {
              console.log(`SCAN: ${message.author.username}`);
              message.channel.send(embedNoRole);    
              return;
       } 

       let memberInRole = message.guild.roles.cache.get(content).members.size;
       let membersInRole = message.guild.roles.cache.get(content).members.map(role => role).join('\n ❯');
       
       const embedRole = new Discord.MessageEmbed()
       .setTitle(`Scan de ${message.guild.name}`)
       .setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
       .setDescription(`\n **Role :** <@&${content}> \n Il y a **${memberInRole}** membres dans le role \n \n ❯ ${membersInRole}`)
       .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
       .setFooter(`Bot developpe par : ${dev.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)



       if(isNaN(content)) return message.reply(`${cfg.emojiError} **| Vous devez spécfier un role !**`);
       
       if(content) {
              message.channel.send(embedRole);
       }
       
	
       console.log(`SCAN: ${message.author.username}`);


}

module.exports.help = {
    name: "scan",
    aliases: [""]
    }