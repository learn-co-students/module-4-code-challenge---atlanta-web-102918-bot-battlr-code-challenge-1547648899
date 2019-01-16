import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends Component {
  state = {
    selectedBot: {}
  };

  setSelectedBot = bot => {
    this.setState({
      selectedBot: bot
    });
  };

  clearSelectedBot = () => {
    this.setState({
      selectedBot: {}
    });
  };

  renderBots = () => {
    if (!this.state.selectedBot.id) {
      return (
        <div className="row">
          <h3>Collection of all bots</h3>
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} viewBot={this.setSelectedBot} />
          ))}
        </div>
      );
    } else {
      return (
        <BotSpecs
          bot={this.state.selectedBot}
          enlist={this.props.addToMyArmy}
          goBack={this.clearSelectedBot}
          addToMyArmy={this.props.addToMyArmy}
        />
      );
    }
  };

  render() {
    return <div className="ui four column grid">{this.renderBots()}</div>;
  }
}

export default BotCollection;
