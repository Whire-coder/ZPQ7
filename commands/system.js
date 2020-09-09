const Discord = require("discord.js");

const os = require('os')
const cpuStat = require("cpu-stat")
const si = require('systeminformation');

module.exports.run = async (bot, message, args, cfg) => {

    let dev = await bot.users.fetch('709481084286533773');
    let dev2 = await bot.users.fetch('428949443304488980');
     
     
     if(message.author.id === "709481084286533773") {

            message.delete();

            console.time()

      function convertMS(ms) {
      let d, h, m, s;
      s = Math.floor(ms / 1000);
      m = Math.floor(s / 60);
      s = s % 60;
      h = Math.floor(m / 60);
      m = m % 60;
      d = Math.floor(h / 24);
      h = h % 24;
      return {
          d: d,
          h: h,
          m: m,
          s: s,
      };
      }

      const u = convertMS(bot.uptime);
      const uptime =
      u.d +
      ' days, ' +
      u.h +
      ' hours, ' +
      u.m +
      ' minutes, ' +
      u.s +
      ' seconds';

      const msg = await message.channel.send('Génération du systeme...');
      message.channel.startTyping();
      let ping = Math.round(bot.ping);
      const memory = await si.mem();
      const totalMemory = Math.floor(memory.total / 1024 / 1024);
      const swapMem = Math.floor(memory.swapused / 1024 / 1024);
      const cachedMem = Math.floor(memory.cached / 1024 / 1024);
      const memoryUsed = Math.floor(memory.used / 1024 / 1024);
      let realMemUsed = Math.floor(cachedMem - swapMem + memoryUsed);
      let memPercent = Math.floor(realMemUsed / totalMemory * 100);
      await si.currentLoad().then(data => cpuUsage = Math.floor(data.currentload_user));
      await si.osInfo().then(data => osVersion = data.distro);
      await si.versions().then(data => nodeVersion = data.node);

      msg.delete();

      const serverembed = new Discord.MessageEmbed()
      .setAuthor('VPS INFO')
      .setTimestamp()
      .setColor('#7289DA')
      .addField('• Uptime', `\`\`\`${uptime}\`\`\``)
      .addField("• Utilisation de la mémoire", `\`\`\`${realMemUsed} / ${totalMemory} - ${memPercent}%\`\`\``)
      .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
      .addField("• Utilisation du CPU", `\`\`\`${cpuUsage}%\`\`\``)
      .addField("• Ping", `\`\`\`${ping}ms\`\`\``)
      .addField("• Versions", `\`\`\`OS: ${osVersion}\`\`\`\n\`\`\`Node.js: ${nodeVersion}\`\`\`\n\`\`\`Discord.js: v11.3.2\`\`\``)
      .addField("• Arch", `\`\`\`${os.arch()}\`\`\``,true)
      .addField("• Platform", `\`\`\`${os.platform()}\`\`\``,true)
      .setFooter(`Bot dév par : ${dev.username}`)
      message.channel.send(serverembed);
      message.channel.stopTyping();
      console.log(`SYSTEM: ${message.author.username}`);

      console.timeEnd()

      } else {
      message.channel.send('<:error:742151145815801927> | **Vous n\'avez pas la permission** ``BOT OWNER``')
      }

}

module.exports.help = {
    name: "system",
    aliases: [""]
    }