exports.run = function(client, message, args) {
    let messagecount = parseInt(args.join(' '));
    message.channel.fetchMessages({
      limit: 20
    }).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`Purged ${args[0]} messages.`).then(msg => msg.delete(5000));
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
  };
  
  exports.help = {
    name: 'purge',
    description: 'Purges X amount of messages from a given channel.',
    usage: 'purge <number>'
  };