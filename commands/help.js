const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg, count) => {

    let dev = await bot.users.fetch('709481084286533773');
    let dev2 = await bot.users.fetch('428949443304488980');

    const embed = new Discord.MessageEmbed()
    .setTitle("Aide de ZPQ7")
    .setImage(bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 128}))
    .setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
    .setAuthor(message.author.username, message.author.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
    .setDescription(`Préfix du bot sur ce serveur : \`${cfg.prefix}\` \n Il y a actuellemnt **${count}** commandes \n Le bot est présent sur **${bot.guilds.cache.size}** serveurs`)

    .addFields (
        {name: '<:general:739474332132311093> Général', value: '`help`, `ping`, `avatar`, `serverinfo`, `userinfo`, `invite`, `scan`, `skin`'},
        {name: '<:ownerCrown:742858585087672442> Administration', value: '`setprefix`, `config`'},
        {name: '<:staff:739454175473041519> Modération', value: '`kick`, `ban`, `clear`, `nuke`'},
        {name: '<:dev:739474621685956618> Développement', value: '`reload`, `eval`, `exec`, `system`, `serverlist`, `getinvite`'},
        //{name: '<:music:742858625743061152> Musique', value: '*Vide...*'}
    )
    .setFooter(`Bot développé par : ${dev.username} & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)

    message.channel.send(embed);
      console.log(`HELP: ${message.author.username}`);

}

module.exports.help = {
    name: "help",
    aliases: ["h"]
}