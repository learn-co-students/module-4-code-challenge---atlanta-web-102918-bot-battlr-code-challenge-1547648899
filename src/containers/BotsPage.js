import React from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';


const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: []
  }

  fetchBots = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(json => this.setState({bots: json}))
  }

  componentDidMount(){
    this.fetchBots()
  }

  render() {
    return (
      <div>
      <BotCollection bots={this.state.bots} />
      <YourBotArmy />
      </div>
    );
  }

}

export default BotsPage;
