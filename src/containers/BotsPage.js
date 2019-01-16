import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";
const BOTS = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor () {
    super()
    this.state = {
      bots: [],
      myBots: [],
      selectedBot: {},
      delisted: []
    };
    this.removeBot = this.removeBot.bind(this)
  }

  componentDidMount() {
    fetch(BOTS)
      .then(res => res.json())
      .then(res => this.fetchBots(res));
  }

  fetchBots = botIndex => {
    this.setState({
      bots: botIndex
    });
  };

  addToMyArmy = bot => {
    this.setState({
      myBots: [...this.state.myBots, bot]
    });
  };

  removeBot = (bot) => {
      this.setState({
        delisted: this.state.delisted.concat(bot)
       })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} delisted={this.removeBot} />
        <BotCollection bots={this.state.bots} addToMyArmy={this.addToMyArmy} />
      </div>
    );
  }
}

export default BotsPage;
