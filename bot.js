const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});


bot.on("ready", () => {
    // This event will run if the bot starts, and logs in, successfully.
    console.log(`FreeGen has started, with ${bot.users.size}  users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
    // Example of changing the bot's playing game to something useful. `bot.user` is what the
    // docs refer to as the "botUser".
    bot.user.setActivity(`${bot.guilds.size} Servers | ,help`, { type: "WATCHING" });
 
  });
  bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('0x5C0E60')
        .setThumbnail(memberavatar)
        .addField('User Joined', `${member} Welcome to our Community!
Please Read the Rules and be Active!`)
        .addField('Member Number',`You are ${member.guild.memberCount} Member`)
        .addField('Server', `${member.guild.name}`, true )
        .setFooter(`Made by JBTech`)
        .setTimestamp()

        channel.sendEmbed(embed);

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('0x5C0E60')
        .setThumbnail(memberavatar)
        .addField('User Left', `${member} has Left The Server,We wil miss you Boy :cry:`)
        .addField('Member Number', `We are now just ${member.guild.memberCount} Users!`)
        .setFooter(`Made by JBTech`)
        .setTimestamp()

        channel.sendEmbed(embed);

});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);

});

bot.login(tokenfile.token);
