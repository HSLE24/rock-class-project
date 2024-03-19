import React, { Component } from 'react'
import BoxClass from './component/BoxClass'
import './App.css';

export default class AppClass extends Component {

    constructor(props){
        super(props)
        this.state={
            userItem: null,
            userResult: null,
            computerItem: null,
            computerResult: null
        }
    }

    choice= {
        rock: { name: "Rock", img: 'data:image/jpeg;base64,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' },
        scissors: { name: "Scissors", img: 'https://cdna.artstation.com/p/assets/images/images/018/600/846/large/mojtaba-gholamshahi-safety-yellow-copy.jpg?1559991132' },
        paper: { name: "Paper", img: 'https://m.media-amazon.com/images/I/61v71f3udFL._AC_UF894,1000_QL80_.jpg' }
    }
      
    setComputerChoice=()=>{
        let itemArray = Object.keys(this.choice)

        let randomNum = Math.floor(Math.random() * itemArray.length);

        return itemArray[randomNum];
    }

    setResults=(user, computer)=>{
        this.setState({userResult: user});
        this.setState({computerResult: computer});
    }

    play=(userChoice)=>{
        this.setState({userItem: this.choice[userChoice]});

        let computerChoice = this.setComputerChoice();
        this.setState({computerItem: this.choice[computerChoice]});

        if (userChoice === computerChoice){
            this.setResults('tie', 'tie')
        }
        else if (userChoice === 'scissors'){
            computerChoice === 'rock'? this.setResults('lose', 'win') : this.setResults('win', 'lose');
        }
        else if (userChoice === 'rock'){
            computerChoice === 'paper'? this.setResults('lose', 'win') : this.setResults('win', 'lose');
        }
        else if (userChoice === 'paper'){
            computerChoice === 'scissors'? this.setResults('lose', 'win') : this.setResults('win', 'lose');
        }
    }

  render() {
    return (
      <div>
        <div className="main">
            <BoxClass title="YOU" item={ this.state.userItem } result={ this.state.userResult }/>
            <BoxClass title="COMPUTER" item={ this.state.computerItem } result={ this.state.computerResult }/>
        </div>
        <div className="main">
            <button onClick={()=>this.play("scissors")}>가위</button>
            <button onClick={()=>this.play("rock")}>바위</button>
            <button onClick={()=>this.play("paper")}>보</button>
        </div>
      </div>
    )
  }
}
