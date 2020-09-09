const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    message.delete()

    let dev = await bot.users.fetch('709481084286533773');
    let dev2 = await bot.users.fetch('428949443304488980');

    let member = message.mentions.members.first();


    const user = message.mentions.users.first() || message.author

        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar de ${user.username}`)
        .setImage(user.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
        .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
        .setTimestamp()
        .setFooter(`Bot développé par : ${dev.username} & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`);


        await message.channel.send(embed);  
      console.log(`AVATAR: ${message.author.username}`);


}

module.exports.help = {
    name: "avatar",
    aliases: [""]
    }