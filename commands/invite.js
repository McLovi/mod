const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTitle("Click me to Invite The Bot:)!")
            .setURL("https://discordapp.com/api/oauth2/authorize?client_id=465549577718595595&permissions=8&scope=bot");
    return message.channel.send({ embed });
}

module.exports.help = {
    name: "invite"
}
