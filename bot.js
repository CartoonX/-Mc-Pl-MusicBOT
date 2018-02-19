const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDE1MTA2ODY0NzEyMzg0NTEy.DWxGDw.CZuIMDxx4IVyrWdbi_2TVfiLUTI);
