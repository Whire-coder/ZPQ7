const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args, cfg) => {

          let guild = message.guild;

          let dev = await bot.users.fetch('709481084286533773');
          let dev2 = await bot.users.fetch('428949443304488980');

          const voiceChannelCount = message.guild.channels.cache.filter(c => c.type === 'voice').size;
          const textChannelCount = message.guild.channels.cache.filter(c => c.type === 'text').size;
          const categoryChannels = message.guild.channels.cache.filter(c => c.type === 'category').size;
          const roleList = message.guild.roles.cache.filter(r => r.name !== '#everyone').map(role => role).join(', ');

          moment.locale("fr");

          const embed = new Discord.MessageEmbed()
          .setAuthor(guild.name, guild.iconURL({format: 'png', dynamic: true, size: 1024}))
          .setFooter(`Bot développé par : ${dev.username} & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)
          .addFields(
            {name: '<:owner:743447475448184853> Owner', value: guild.owner, inline: true},
            {name: ':map: Region', value: guild.region, inline: true},
            {name: '<:calendar:743447583166300171> Créer', value: moment.utc(guild.createdAt).startOf('hour').fromNow(), inline: true},
            {name: '<:channels:743447884690620438> Channels', value: `${categoryChannels} Catégories | ${textChannelCount} Salons textuels | ${voiceChannelCount} Salons vocaux`, inline: false},
            {name: ':man: Members', value: guild.memberCount, inline: true},
            {name: `<a:serverBoost:742448349449551992> Boosts `, value: `${guild.premiumSubscriptionCount} Boosts | ${message.guild.premiumTier} Tiers`, inline: true},
            {name: '<:emojis:743447609062195321> Emojis', value: guild.emojis.cache.size, inline: true},
            {name: `<:roleList:743447640414486579> Role List (${guild.roles.cache.size})`, value: roleList}
          )
          .setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))

          message.channel.send(embed);
      console.log(`SERVERINFO: ${message.author.username}`);

          }

module.exports.help = {
    name: "serverinfo",
    aliases: ["si"]
    }