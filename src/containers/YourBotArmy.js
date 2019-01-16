import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBots = () => {
    return this.props.selectedBots.map((bot) => {
      return <BotCard key={bot.id} bot={bot} />
    })
  }

  render(){
    const { selectedBots } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { selectedBots.length === 0 
              ? 'Your Bot Army' 
              : this.renderBots() 
            }   
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
