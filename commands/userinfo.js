const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args, cfg) => {

    let dev2 = await bot.users.fetch('428949443304488980');


    const user = message.mentions.users.first() || message.author

        let hr = message.guild.member(user).roles.highest.id;

          let devP = '';
          let nitroP = '';
          let balanceP = '';
          let braveryP = '';
          let brillianceP = '';
          let earlyP = '';
          let boostP = '';
          let display = '';
          let displayE = '';  

          dev = user.flags.has("VERIFIED_DEVELOPER");
          balance = user.flags.has("HOUSE_BALANCE");
          bravery = user.flags.has("HOUSE_BRAVERY");
          brilliance = user.flags.has("HOUSE_BRILLIANCE");
          early = user.flags.has("EARLY_SUPPORTER");
          nitro = false;
          boost = false;

          const newA = user.avatarURL({dynamic: true})

          if(user.premiumSubscriptionCount == 1) boost = true;

          if(user.presence.status == "dnd") {
            display = 'Ne pas déranger';
            displayE = cfg.emojiDnd;
          }

          if(user.presence.status == "online") {
            display = 'En ligne';
            displayE = cfg.emojiOnline;
          }

          if(user.presence.status == "offline") {
            display = 'Hors ligne';
            displayE = cfg.emojiInvisible;
          }

          if(user.presence.status == "idle") {
            display = 'Inactif';
            displayE = cfg.emojiIdle;
          }

          if(newA != user.avatarURL()) nitro = true;

          if(dev == true) devP = `${cfg.emojiDev}`;
          if(early == true) earlyP = `${cfg.emojiEarly}`;
          if(bravery == true) braveryP = `${cfg.emojiBravery}`;
          if(brilliance == true) brillianceP = `${cfg.emojiBrilliance}`;
          if(balance == true) balanceP = `${cfg.emojiBalance}`;
          if(nitro == true) nitroP = `${cfg.emojiNitro}`;
          if(boost == true) boostP = `${cfg.emojiBoost}`;

          if(dev == false && bravery == false && balance == false && brilliance == false && nitroP == false && boostP == false) devP = `Aucun badges`;

          const member = message.guild.member(user);
          moment.locale('fr');

          const embed = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
          .setThumbnail(user.displayAvatarURL({format: 'png', dynamic: true, size: 1024}))
          .setColor("RANDOM")
          .setDescription(`**Utilisateur** \n **❯ Username: ** ${user.username} \n **❯ Discriminator: ** ${user.discriminator} \n **❯ ID: ** ${user.id} \n **❯ Badges:  ** ${devP} ${brillianceP} ${balanceP} ${braveryP} ${nitroP} ${earlyP} ${boostP} \n **❯ Statut: ** ${display} ${displayE} \n  **❯ Jeu: ** ${user.presence.game ? user.presence.game.name : 'Aucun jeu'} \n**❯ Compte créé: ** ${moment.utc(user.createdAt).startOf('hour').fromNow()} \n \n **Membre** \n **❯ A rejoint: ** ${moment.utc(member.joinedAt).startOf('hour').fromNow()} \n **❯ Role le plus haut: ** <@&${hr}> \n **❯ Roles: ** <@&${message.guild.member(user)._roles.join('> <@&')}> `)
          .setFooter(`Bot développé par : Whir & ${dev2.username}`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)   


          message.channel.send(embed);
	  console.log(`USERINFO: ${message.author.username}`);

}

module.exports.help = {
  name: "userinfo",
  aliases: ["ui"]
}