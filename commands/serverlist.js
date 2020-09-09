const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

		if(message.author.id === '709481084286533773' || message.author.id === "564525495086088193" || message.author.id === "428949443304488980") {

            console.log(`SERVERLIST: ${message.guild.name} (${message.author.username})`);

			message.delete()

			let dev = await bot.users.fetch('709481084286533773');

	   let i0 = 0;
      let i1 = 10;
      let page = 1;

      let description =
        `Serveurs de ZPQ7 - ${bot.guilds.cache.size}\n\n` +
        bot.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `**${i + 1}** - ${r.name} | **${r.memberCount} Membres**\nID - ${r.id}`)
          .slice(0, 10)
          .join("\n \n");

      let embed = new Discord.MessageEmbed()
        .setAuthor(
          message.author.tag,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setColor("GREEN")
		    .setFooter(bot.user.username)
		    .setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
        .setTitle(`Page - ${page}/${Math.ceil(bot.guilds.cache.size / 10)}`)
        .setDescription(description).setFooter(`Bot développé par : ${dev.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`);

      let msg = await message.channel.send(embed);

      await msg.react("⬅");
      await msg.react("➡");
      await msg.react("❌");

      let collector = msg.createReactionCollector(
        (reaction, user) => user.id === message.author.id
      );

      collector.on("collect", async (reaction, user) => {
        if (reaction._emoji.name === "⬅") {
          i0 = i0 - 10;
          i1 = i1 - 10;
          page = page - 1;

          if (i0 + 1 < 0) {
            console.log(i0)
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Serveurs de ZPQ7 - ${bot.guilds.cache.size}\n\n` +
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | **${r.memberCount} Membres**`
              )
              .slice(i0, i1)
              .join("\n \n");

          embed
            .setTitle(
              `Page - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
            )
			.setDescription(description)
			.setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}))
			.setFooter(`Bot développé par : ${dev.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`);

          msg.edit(embed);
        }

        if (reaction._emoji.name === "➡") {
          i0 = i0 + 10;
          i1 = i1 + 10;
          page = page + 1;

          if (i1 > bot.guilds.cache.size + 10) {
            return msg.delete();
          }
          if (!i0 || !i1) {
            return msg.delete();
          }

          description =
            `Total Servers - ${bot.guilds.cache.size}\n\n` +
            bot.guilds.cache
              .sort((a, b) => b.memberCount - a.memberCount)
              .map(r => r)
              .map(
                (r, i) => `**${i + 1}** - ${r.name} | **${r.memberCount} Membres**`
              )
              .slice(i0, i1)
              .join("\n \n");

          embed
            .setTitle(
              `Page - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
            )
			.setDescription(description)
			.setThumbnail(message.guild.iconURL({format: 'png', dynamic: true, size: 1024}));

          msg.edit(embed);
        }

        if (reaction._emoji.name === "❌") {
          return msg.delete();
        }

        await reaction.users.remove(message.author.id);
      });
    } else {
		message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`BOT OWNER\`\``);
    }
  }


	module.exports.help = {
		name: "serverlist",
		aliases: ["sl"]
		}