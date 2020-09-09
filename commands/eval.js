const Discord = require("discord.js");

module.exports.run = async (bot, message, args, cfg) => {

        if(message.author.id === '709481084286533773') {

	    console.log(`EVAL: ${message.author.username}`);


            const content = message.content.split(" ").slice(1).join(" ");
             const result = new Promise((resolve, reject) => resolve(eval(content)));
               return result.then((output) => {
               if(typeof output !== "string"){
                 output = require("util").inspect(output, { depth: 0 });
               }
               if(output.includes(message.client.token)){
                 output = output.replace(message.client.token, "T0K3N");
               }
               message.channel.send(output, {
                 code: "js"
                });
             }).catch((err) => {
               err = err.toString();
               if(err.includes(message.client.token)){
                 err = err.replace(message.client.token, "T0K3N");
               }
                message.channel.send(err, {
                 code: "js"
                });
            });
	

          } else {
            message.channel.send(`${cfg.emojiError} | **Vous n\'avez pas la permission** \`\`BOT OWNER\`\``);
          }

        }

        module.exports.help = {
            name: "eval",
            aliases: [""]
        }