import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import _ from 'lodash'

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: null,
    selectedBots: [] 
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots') 
      .then(res => res.json())
      .then(bots => this.setState({
        bots
      })) 
  }

  removeBot = (id) => {
    const findBot = this.state.selectedBots.find((bot) => {
      return bot.id == id
    })

    // this is where I planned to use the lodash command to remove the 
    // specific element from the selectedBots array. Splice works here too. Then pass to YourBotArmy component and so forth...

    // _.remove(this.state.selectedBots, () => {})

  }

  selectBot = (id) => {
    const { selectedBots } = this.state
    const selectedBot = this.state.bots.find((bot) => {
      return bot.id === id 
    })
    const botAlreadySelected = (selectedBot) => {
      return selectedBots.some((bot) => {
        return bot.id === selectedBot.id
      })
    }

    if (!botAlreadySelected(selectedBot)) {
      this.setState({
        selectedBots: selectedBots.concat(selectedBot)
      })
    }
  }

  render() {
    const { bots, selectedBots } = this.state   
    return (
      <div>
        { this.state.bots === null 
            ? <p>Loading</p> 
            : (
              <div>
                <YourBotArmy selectedBots={selectedBots} />
                <BotCollection bots={bots} selectBot={this.selectBot} />
              </div>
              ) 
        }
      </div>
    );
  }

}

export default BotsPage;
