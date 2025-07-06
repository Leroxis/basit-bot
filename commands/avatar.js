const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'Kullanıcının avatarını gösterir',
  execute: async (client, message, args) => {
    const targetUser = message.mentions.users.first() || message.author;
    
    const selectMenu = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('avatar-size-select')
          .setPlaceholder('Avatar boyutu seçin')
          .addOptions([
            { label: '16x16', value: '16' },
            { label: '32x32', value: '32' },
            { label: '64x64', value: '64' },
            { label: '128x128', value: '128' },
            { label: '256x256', value: '256' },
            { label: '512x512', value: '512' },
            { label: '1024x1024', value: '1024' },
            { label: '2048x2048', value: '2048' },
            { label: 'Orijinal Boyut', value: 'original' }
          ])
      );

    const reply = await message.reply({
      content: `**${targetUser.tag}** kullanıcısının avatarını hangi boyutta istersiniz?`,
      components: [selectMenu]
    });

    const filter = i => i.customId === 'avatar-size-select' && i.user.id === message.author.id;
    
    try {
      const selection = await reply.awaitMessageComponent({ filter, time: 30000 });
      
      const size = selection.values[0];
      
      let avatarURL;
      if (size === 'original') {
        avatarURL = targetUser.displayAvatarURL({ extension: 'png', size: 4096 });
      } else {
        avatarURL = targetUser.displayAvatarURL({ extension: 'png', size: parseInt(size) });
      }
      
      await selection.update({
        content: `**${targetUser.tag}** kullanıcısının avatarı (${size === 'original' ? 'Orijinal Boyut' : `${size}x${size}`}):`,
        components: []
      });
      
      await message.channel.send({
        content: avatarURL
      });
      
    } catch (error) {
      await reply.edit({
        content: 'Avatar seçimi zaman aşımına uğradı veya iptal edildi.',
        components: []
      });
    }
  }
};