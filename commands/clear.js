module.exports.run = async (bot, message, args, cfg) => {

	if(message.member.hasPermission("MANAGE_MESSAGES")){

	console.log(`CLEAR: ${message.author.username}`);

        const args = message.content.split(' ').slice(1);
        const amount = args.join(' ');

        if (!amount) return message.reply(`${cfg.emojiError} **| Vous devez spécifier un montant entre 1 et 100 !**`); 
        if (isNaN(amount)) return message.reply(`${cfg.emojiError} **| \`\`${amount}\`\` ne sont pas des chiffres !**`);
        
        if (amount > 100) return message.reply(`${cfg.emojiError} **| Je ne peux pas supprimer plus de \`\`100\`\` messages !**`); 
        if (amount < 1) return message.reply(`${cfg.emojiError} **| Je dois supprimer au moins \`\`1\`\` message !**`);

        message.delete();

        
        await message.channel.messages.fetch({ limit: amount }).then(messages => { 
            message.channel.bulkDelete(messages 
        )});

        message.channel.send(`${cfg.emojiClear} **| \`\`${amount}\`\` messages ont été clears !**`);
    

    } else {
        let permission = "GERER LES MESSAGES";
        message.channel.send(`${cfg.emojiError} **| Vous n'avez pas la permission \`\`${permission}\`\` !**`)
    }

}



module.exports.help = {
    name: "clear",
    aliases: [""]
}