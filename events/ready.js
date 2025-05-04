const { ActivityType } = require('discord.js');

module.exports = {
  handleReady: (client) => {
    console.log(`✅ ${client.user.tag} aktif!`);

    const activities = [
      { name: 'Discord.js Öğreniliyor', type: ActivityType.Playing },
      { name: 'Lerox', type: ActivityType.Playing },
      { name: 'Coding Öğreniliyor', type: ActivityType.Playing },
      { name: 'Test Botu', type: ActivityType.Competing }
    ];
    
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    
    client.user.setPresence({
      activities: [randomActivity],
      status: 'dnd'
    });

    setInterval(() => {
      const newActivity = activities[Math.floor(Math.random() * activities.length)];
      client.user.setActivity(newActivity.name, { type: newActivity.type });
    }, 1800000);
  }
};