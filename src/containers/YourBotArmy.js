import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {props.bots.map(bot => <BotCard key={bot.id} bot={bot} delisted={props.delisted} />)}
          <h3>Your Bot Army</h3>
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
