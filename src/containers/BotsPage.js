import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    army: []
  }

  fetchBots = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({bots: json}))
  }

  componentDidMount(){
    this.fetchBots()
  }

  addBot = (bot) => {
      this.setState({
        army: this.state.army.concat(bot)
      })
    }

  render() {
    return (
      <div>
      <BotCollection bots={this.state.bots} army={this.state.army} addBot={this.addBot}/>
      <YourBotArmy army={this.state.army}/>
      </div>
    );
  }

}

export default BotsPage;
