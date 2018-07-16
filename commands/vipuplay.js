const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function uplay() {
    var rand = ['',
      'feffefeeffe'
];
    

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["VIP"].includes(r.name))) {
        message.channel.send(` :tada:Account Generated:tada:
  :white_check_mark:Check Your DM!:white_check_mark: `)
        
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Sucefully Generated a Uplay Account!")
            .addField("Account Type:", `\nType: Uplay`, true)
            .addField("Your Uplay Account", (uplay()), true)
            .setURL("https://discord.gg/tHhQcfT")
            .addField("Join Support Server for Support", `\nInvite Link:https://discord.gg/tHhQcfT`, true)
            .setFooter(`Made by JBTech || 2.0`);
        return message.author.send({ embed });
    } else {
        message.channel.send(":x: **Invite 10 Peoples to get Accses!** :x:");
        message.author.send(`:white_check_mark:**To Get access invite 10 peoples**:white_check_mark: `);
    }
}

module.exports.help = {
    name: "vipuplay"
}