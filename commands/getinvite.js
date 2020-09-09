const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

    if(message.author.id === '709481084286533773' || message.author.id === "564525495086088193") {

        let dev = await bot.users.fetch('709481084286533773');

        let guild = null;

        if (!args[0]) return message.reply(`${cfg.emojiError} **| Veuillez entrer un nom de guild valide !**`)

        if(args[0]){
            let fetched = bot.guilds.cache.find(g => g.name === args.join(" "));
            let found = bot.guilds.cache.get(args[0]);
            if(!found) {
                if(fetched) {
                    guild = fetched;
                }
            } else {
                guild = found
            }
        } else {
            return message.reply(`${cfg.emojiError} **| Veuillez entrer un nom de guild valide !**`);
        }
        if(guild){

            let tChannel = guild.channels.cache.find(ch => ch.type == "text" && ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE"));
            if(!tChannel) {
                return message.channel.send(`${cfg.emojiError} Error`); 
            }
            let invite = await tChannel.createInvite({ temporary: false, maxAge: 0 }).catch(err => {
                return message.channel.send(`${err} has occured!`);
            });

            message.channel.send(`Invitation vers: **${args.join(' ')}** \n ❯ ${invite.url}`);
            console.log(`GETINVITE: ${message.guild.name} (${message.author.username}) => ${args.join(' ')}`);
        } else {
            return message.channel.send(`${cfg.emojiError} **| Le bot n'est pas sur le serveur \`\`${args.join(' ')}\`\`**`);
        }

    } else {
        message.channel.send(`${cfg.emojiError} **| Vous n'avez pas la permission \`\`BOT OWNER\`\`**`)
    }


}

module.exports.help = {
    name: "getinvite",
    aliases: ["gi"]
    }