import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy'

const API = ("https://bot-battler-api.herokuapp.com/api/v1/bots")

class BotsPage extends React.Component {
  state = {
  allBots: [],
  armyBots: []
    }

  fetchBots = () => {
    fetch(API)
    .then(res => res.json())
    .then(json => this.setState({allBots: json}))
    }

  componentDidMount() {
    this.fetchBots()
  }

  addToArmy = (bot) => {
    return this.setState({ armyBots: this.state.armyBots.concat(bot)})}


  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.armyBots}/>
        <BotCollection addToArmy={this.addToArmy} allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
