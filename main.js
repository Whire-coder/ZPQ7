const Discord = require("discord.js");
const fs = require("fs");

const cfg = require("./storage/config.json");

const bot = new Discord.Client();

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

let count = 0;


console.log("Lancement du bot...");

bot.on('guildMemberAdd', (member, guild) => {

    //if(guild.id != '749292627693928537') return;

    bot.channels.cache.get('749612232551170079').setName(`𝙈𝙚𝙢𝙗𝙧𝙚𝙨 ${guild.memberCount} 👤`);

});

bot.on('guildMemberRemove', (member, guild) => {

  //if(guild.id != '749292627693928537') return;

  bot.channels.cache.get('749612232551170079').setName(`𝙈𝙚𝙢𝙗𝙧𝙚𝙨 ${guild.memberCount} 👤`);
});

bot.on('guildCreate', (guild) => {

  bot.user.setActivity(`${bot.guilds.cache.size} guils |👀`, { type: 'WATCHING' })
  .then(presence => console.log(`[+] ${guild.name} (${bot.guilds.cache.size} guilds)`))
  .catch(console.error);

  const embed = new Discord.MessageEmbed()
  .setTitle("🎉 Server Added 🎉")
  .setDescription(`Le serveur ${guild.name} a ajouté ZPQ7 !`)
  .addFields(
    {name: 'Nom', value: guild.name, inline: true},
    {name: 'Membres', value: guild.memberCount, inline: true},
    {name: 'Owner', value: guild.owner, inline: true},
    {name: 'Identifiant', value: guild.id, inline: true}

  )
  .setThumbnail(guild.iconURL({format: 'png', dynamic: true, size: 1024}))
  .setFooter(`Bot développé par : Rome.💎`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)

  bot.channels.cache.get('747936087640637572').send(embed);

});

bot.on('guildDelete', (guild) => {

  bot.user.setActivity(`${bot.guilds.cache.size} guils |👀`, { type: 'WATCHING' })
  .then(presence => console.log(`[-] ${guild.name} (${bot.guilds.cache.size} guilds)`))
  .catch(console.error);

  const embed = new Discord.MessageEmbed()
  .setTitle("💥 Server Removed 💥")
  .setDescription(`Le serveur ${guild.name} a enlevé ZPQ7 !`)
  .addFields(
    {name: 'Nom', value: guild.name, inline: true},
    {name: 'Membres', value: guild.memberCount, inline: true},
    {name: 'Owner', value: guild.owner, inline: true},
    {name: 'Identifiant', value: guild.id, inline: true}

  )
  .setThumbnail(guild.iconURL({format: 'png', dynamic: true, size: 1024}))
  .setFooter(`Bot développé par : Rome.💎`, `${bot.user.displayAvatarURL({format: 'png', dynamic: true, size: 1024})}`)

  bot.channels.cache.get('747936087640637572').send(embed);

});

bot.on('ready',async () => {

    console.log("Ready !");
    bot.user.setActivity(`${bot.guilds.cache.size} guils |👀`, { type: 'WATCHING' })
  .then(presence => console.log(`Activity set to ${presence.activities[0].name} \n======================================`))
  .catch(console.error);
        
});



fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Le dossier Commands est introuvable !");
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} a été chargé avec succes !`);
    count++;
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})

  bot.on("message", async message => {

    let prefix = cfg.prefix;

    if (!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

        if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }


          
  try {
    commandfile.run(bot, message, args, cfg, count);
  
  } catch (e) {
  }}
  )


bot.login(cfg.token);
