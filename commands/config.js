const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    return message.channel.send(`${cfg.emojiError} **| Cette commande est actuelement désactivée !**`)

    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    if(message.member.hasPermission("ADMINISTRATOR")) {

      message.delete() 

      let msg = await message.channel.send(`${cfg.emojiWaiting} Veuillez patienter...`)
      msg.react('✈️').then(() => msg.react('📃').then(() => msg.react('❌').then(() =>  msg.edit(`${cfg.emojiConfig} **Configuration sur __${message.guild.name}__** \n *Bienvenue sur le menu de configuration de ZPQ7*  \n \n ✈️ ● Changer le channel d'envoie des messages de bienvenue \n 📃 ● Changer le prefix du bot \n \n ❌ ● **Fermer**`))));

      const filter = (reaction, user) => {
  			return ['✈️', '❌', '📃'].includes(reaction.emoji.name) && user.id === message.author.id;
  		};

  		msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
  			.then(collected => {
          const reaction = collected.first();

  				if (reaction.emoji.name === '✈️') {
            msg.delete();
            message.channel.send('Entrez l\'identifiant du nouveau salon de bienvenue.')

            const collectort = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });

            collectort.on('collect', message => {

            })

  				} else if(reaction.emoji.name === '❌') {
            msg.delete();  
              message.channel.send(`${cfg.emojiSucces} **|La configuration a été fermée.**`)
          } else if(reaction.emoji.name === '📃') {
            message.channel.send('Prefix');
          }
          
  			})
  			.catch(collected => {
              });

      console.log(`CONFIG: ${message.author.username}`);



    } else {
      message.channel.send(`${cfg.emojiError} **| Vous n'avez pas la permission \`\`ADMINISTRATOR\`\` `);
    }

  }

  module.exports.help = {
    name: "config",
    aliases: [""]
    }