const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    //return message.reply(`${cfg.emojiError} **| Cette commande est temporairement désactivée !**`)

    let dev = await bot.users.fetch('709481084286533773');
    let dev2 = await bot.users.fetch('428949443304488980');

    const user = message.mentions.users.first() || message.author

    for(perms = 0; perms > user.permissions.lenght; perms++) {
        console.log(perms);
    }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**Permissions de : ${user} dans: ${message.channel}** \n \n ${perms}`)
    .setColor("RANDOM") 
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
    .setFooter(`Bot developpe par : ${dev.username} & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)
 


    message.channel.send(embed);

     console.log(`PERMISSIONS: ${message.author.username}`);


}

module.exports.help = {
    name: "permissions",
    aliases: ["perm", "perms", "permission"]
    }