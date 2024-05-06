import React from 'react';
import './YourBotArmy'

function YourBotArmy({ enlistedBots, setEnlistedBots }) {
  const releaseBot = (bot) => {
    const updatedList = enlistedBots.filter(b => b.id !== bot.id);
    setEnlistedBots(updatedList);
  };

  const dischargeBot = async (bot) => {
    try {
      // Delete bot from backend
      await fetch(`http://localhost:8000/bots/${bot.id}`, {
        method: 'DELETE',
      });

      // Remove bot from frontend
      const updatedList = enlistedBots.filter(b => b.id !== bot.id);
      setEnlistedBots(updatedList);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="enlisted-bots-container">
      {enlistedBots.map((bot) => (
        <div className="enlisted-bot" key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
          <p>Class: {bot.bot_class}</p>
          <button onClick={() => releaseBot(bot)}>Release</button>
          <button className="discharge-button" onClick={() => dischargeBot(bot)}
           style={{ color: 'red' }}>x</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default YourBotArmy;
