require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { handleReady } = require('./events/ready');
const pingCommand = require('./commands/ping');
const avatarCommand = require('./commands/avatar');
const config = require('./config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const commands = {
  ping: pingCommand,
  avatar: avatarCommand
};

client.once('ready', () => handleReady(client));

client.on('messageCreate', message => {
  if (message.author.bot) return;
  
  const prefix = config.prefix || '.';
  if (!message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  if (commands[commandName]) {
    try {
      commands[commandName].execute(client, message, args);
    } catch (error) {
      console.error(error);
      message.reply('Komut çalıştırılırken bir hata oluştu!');
    }
  }
});

client.login(config.Token).catch(console.error);