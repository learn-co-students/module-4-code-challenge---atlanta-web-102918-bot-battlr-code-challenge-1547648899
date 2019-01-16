import React from "react";
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: null
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots') 
      .then(res => res.json())
      .then(bots => this.setState({
        bots
      })) 
  }

  render() {
    const { bots } = this.state   
    return (
      <div>
        { this.state.bots === null 
            ? <p>Loading</p> 
            : <BotCollection bots={bots} /> 
        }
      </div>
    );
  }

}

export default BotsPage;
