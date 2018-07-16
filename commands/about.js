const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTitle("Al About Me :)")
            .addField("Why was i Programmed?", `\nI was Programmed to distribute Alts to Peoples!`)
            .addField("Developer:", `\nMy Developer is JBTech#6428!`, true)
            .addField("Refiller:", `\nMy Refiller is Isaik#8749!` ,true)
            .addField("My Date", `\nI was Programmed on 9.07.2018!
My Last Update was on 9.07.2018!
Last Restart was on 9.07.2018!`, true)
            .addField("My Stats",`\nServing ${bot.guilds.size} servers
I serve ${bot.users.size} users!
I'm on ${bot.channels.size} Channels Online!`,true)
            .setFooter("Made by JBTech")
            .setURL("");
    return message.channel.send({ embed });
}

module.exports.help = {
    name: "about"
}
