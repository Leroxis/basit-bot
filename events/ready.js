const { ActivityType } = require('discord.js');

module.exports = {
  handleReady: (client) => {
    console.log(`✅ ${client.user.tag} aktif!`);

    const activities = [
      { name: 'Powered By Lerox', type: ActivityType.Playing },
      { name: 'Coded By Lerox', type: ActivityType.Playing },
      { name: 'Powered By Lerox', type: ActivityType.Playing },
      { name: 'Coded By Lerox', type: ActivityType.Competing }
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