module.exports = {
    name: 'ping',
    description: 'Botun ping değerlerini gösterir',
    execute: async (client, message) => {
      const sent = await message.reply({ content: '🏓 Ping ölçülüyor...', fetchReply: true });
      const ping = sent.createdTimestamp - message.createdTimestamp;
      
      message.channel.send(
        `✅ Pong!\n` +
        `📶 Bot gecikmesi: ${ping}ms\n` +
        `📡 API gecikmesi: ${client.ws.ping}ms`
      );
    }
  };