import React from 'react';

function BotSpecs({ bot, enlistBot, goBackToList }) {
  return (
    <div>
      <h2>{bot.name} Specs</h2>
      
      <button onClick={() => enlistBot(bot)}>Enlist</button>
      
      <button onClick={() => goBackToList()}>Back to List</button>
    </div>
  );
}

export default BotSpecs;
