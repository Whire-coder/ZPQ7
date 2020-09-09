const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports.run = async (bot, message, args, cfg) => {

	return message.reply(`${cfg.emojiError} **| Cette commande est temporairement désactivée !**`);

      const voiceChannel = message.member.voice.channel;

		if (!voiceChannel) return message.reply(`${cfg.emojiError} **| Vous devez être dans un salon vocal !**`);
			

		voiceChannel.join().then(connection => {
			const stream = ytdl('https://www.youtube.com/watch?v=D57Y1PruTlw', { filter: 'audioonly' });
			const dispatcher = connection.play(stream);

			dispatcher.on('finish', () => voiceChannel.leave());
		});
	
      console.log(`PLAY: ${message.author.username}`);


}

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));

module.exports.help = {
    name: "play",
    aliases: ["p"]
    }