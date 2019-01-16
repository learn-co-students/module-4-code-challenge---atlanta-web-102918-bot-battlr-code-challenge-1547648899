import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  constructor(props) {
  super(props)
  }


renderBotCard = () => {console.log(this.props.allBots)
  const everybot = this.props.allBots
  console.log(everybot)
everybot.map(bot => {<BotCard bot={bot}/>})
//
}


render() {
  //console.log(this.props)
      return (
    	  <div className="ui four column grid">
      		<div className="row">
            {this.renderBotCard()}
      		</div>
    	  </div>
    	);
    }
}

export default BotCollection;
