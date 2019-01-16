import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	
	renderBotCards = () => {
		return this.props.bots.map((bot) => {
			return <BotCard key={bot.id} bot={bot} selectBot={this.props.selectBot} />
		}) 
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
