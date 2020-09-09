const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    let dev = await bot.users.fetch('709481084286533773');
    let dev2 = await bot.users.fetch('428949443304488980');

    const embed = new Discord.MessageEmbed()
    .setTitle('📄 Liens de ZPQ7')
    .setColor("RANDOM")
    .setDescription('\n ❯ [Serveur discord](https://discord.gg/aVHCV3Z) \n \n ❯ [Inviter le bot](https://discord.com/api/oauth2/authorize?client_id=742537411505946706&permissions=8&scope=bot)')
    .setFooter(`Bot développé par : ${dev.username} & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)

    message.channel.send(embed);
      console.log(`INVITE: ${message.author.username}`);


}

module.exports.help = {
    name: "invite",
    aliases: [""]
    }