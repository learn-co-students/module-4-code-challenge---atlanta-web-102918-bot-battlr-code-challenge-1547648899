import React from "react";
import BotCollection from './BotCollection.js'
const API = ("https://bot-battler-api.herokuapp.com/api/v1/bots")

class BotsPage extends React.Component {
  //start here with your code for step on
  state = {
  allBots: this.state
  
    }


  fetchBots = () => {
    fetch(API)
    .then(res => res.json())
    .then(json => this.setState({allBots: json}))
    }

  componentDidMount() {
    this.fetchBots()
  }


  render() {
    return (
      <div>
        <BotCollection allBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
