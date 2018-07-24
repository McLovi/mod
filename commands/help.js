const Discord = require("discord.js");
const { RichEmbed } = require('discord.js');
const fs = require("fs");

function uplay() {
    var rand = ['Hey du',
        ];

    return rand[Math.floor(Math.random() * rand.length)];
}

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.some(r => ["@everyone"].includes(r.name))) {
        message.channel.send(`Check Your Dm for The Commands!`)
        
        const embed = new RichEmbed()
            .setColor(0x5C0E60)
            .setTimestamp()
            .setTitle("Bot Commands")
            .addField("User Commands", `\n<minecraft: Get a20% Working Minecraft Account!
<spotify: Get a 20% Working Spotify Account
<about: Shows Bot Infos!
<bug [bug]: Reports a Bug!
<suggest [Suggestion]: Suggest Something!
<ping: I wonder what this does?;)
<google [Name] Googles Somthing!
<invite: Invite the Bot to your Server!
<help: Shows this Message!
Info:VIP can Generate 95% Working Accounts! `, true)
            .addField("VIP Commands", `\n<vipminecraft)
*vipspotify: Generate a Spotify Premium Account!
*vipuplay: Generate a Uplay Account with Games
*viporgin: Generate a Orgin Account with Games!
*vipfortnite: Generate a Fortnite Account (If you have Luck with Payment)!!
More Comming Soon.........!`, true)
            .addField("Admin Commands", `\n<ban [User] [Reason]: Ban a User from the Server!
<kick [User] [Reason]: Kick a User from the Server
<lockdown [Duration]: This will lock a channel down!
<purge [Number]: Purges X amount of messages from a given channel.
<clear [Amount]: ClearMessages
<say [Text]: Made the Bot to say Something!
<warn [User] [Reason]: Warns a User
<mute [User] [Reason]`, true)
            .setURL("https://discord.gg/tHhQcfT")
            .addField("Join Support Server for= Support", `\nInvite Link:https://discord.gg/qaURwzc , true)
            .setFooter(`Dev:JBTech || 2.0
Refiller:Isaik#8749
JustCortex#9837`);
            

        return message.author.send({ embed });
    } else {
        message.channel.send("Check Your Dm for The Commands!");
        message.author.send("There is s Problem Please Contact JBTech!");
    }
}

module.exports.help = {
    name: "help"
}
    {

    }
