const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

	 if(message.author.id === '709481084286533773') {


	const content = message.content.split(" ").slice(1).join(" ");

	if(!content) return message.channel.send('>', {
                      code: "none"
                   });


	const { exec } = require("child_process");

	exec(content, (error, data, getter) => {

		if(!data) return message.channel.send('>', {
			code: "none"
		 });

		if(data.length >= 2000) return message.channel.send('> Must be 2000 or fewer in length.', {
			code: "none"
		 });

		
		if(error){
		   message.channel.send(error, {
                      code: "none"
                   });

			return;
		}
		if(getter){
		   message.channel.send(data, {
                      code: "none"
                   });
		}
		 message.channel.send(data, {
                 code: "none"
                });


	});



    	console.log(`EXEC: ${message.author.username}`);

	} else {
	    message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`BOT OWNER\`\``);
	}


}

module.exports.help = {
    name: "exec",
    aliases: ["exe", "execute"]
    }