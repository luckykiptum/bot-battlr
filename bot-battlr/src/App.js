import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import BotSpecs from './Components/BotSpecs';
import SortBar from './Components/SortBar';
import './App.css';

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  const enlistBot = (bot) => {
    if (!enlistedBots.some(b => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
  };

  const goBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div className="app-container">
    
    <main>
        <section className="bot-collection">
          {selectedBot ? (
            <BotSpecs bot={selectedBot} enlistBot={enlistBot} goBackToList={goBackToList} />
          ) : (
            <BotCollection
              enlistBot={enlistBot}
              showBotSpecs={showBotSpecs}
              enlistedBots={enlistedBots}
            />
          )}
        </section>
        <section className="your-bot-army">
          <YourBotArmy enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
        </section>
      </main>
    </div>
  );
}

export default App;
