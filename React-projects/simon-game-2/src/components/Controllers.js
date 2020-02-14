import React, { Component } from "react";
import { initalPads } from "./Audio";


class Controllers extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      buttons: [],
      flash: {},
      computerMoves: [1 , 2],
      playersMoves: [],
      randomButtons: initalPads
    };
  }

  componentDidMount() {
    this.setState({ buttons: initalPads });
  }
  flickButtons = id => {
    const { buttons, playersMoves , computerMoves } = this.state;
    console.log('id',  playersMoves.length , computerMoves.length)
    var index = buttons.findIndex(sound => sound.id == id);
    playersMoves.push(id);
    console.log("players Moves", playersMoves);
    if (id === id) {
      this.refs[id].style.background = "white";
      console.log(computerMoves.join('') , playersMoves.join(""))
      setTimeout(() => {
        this.refs[id].style.background = buttons[index].color;
      }, 300);
    }
    
    if(playersMoves.length == computerMoves.length &&
      computerMoves.join('') == playersMoves.join("")){
        this.playCombinationOfSounds()
     console.log('win')
   }
  };

  RandomFickButtons = () => {};

  playOneSound = (e, url) => {
    var sound = new Audio(url);
    this.setState({ flash: { id: e.target.id, state: true } });
    this.flickButtons(e.target.id);
    return sound.play();
  };

  generateRandomMove(){
    return Math.floor(Math.random() * 4);
  }
// this function it doesn't want to run for than once and if u call it in another function it doesn't get executed
  playCombinationOfSounds() {
    const { randomButtons, computerMoves } = this.state;
    var counter = 0;
    var gameEngine;
    gameEngine = setInterval(() => {
      var copyOfButtons = JSON.parse(JSON.stringify(randomButtons));
      var i = counter;
      randomButtons[computerMoves[i] - 1].color = "white";
      this.setState({ randomButtons });
      setTimeout(() => {
        randomButtons[computerMoves[i] - 1].color = copyOfButtons[computerMoves[i] - 1].color;
        this.setState({randomButtons : copyOfButtons})
      }, 500);
      if(computerMoves.length - 1 == i){
        clearInterval(gameEngine)
        return
      }
      counter++;
    }, 1000);
    
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="onButton">
        <header id="header">Simon game</header>
        <div className="container">
          <div className="button-container">
            {this.state.buttons.map(sound => (
              <button
                ref={sound.id}
                id={sound.id}
                onClick={e => this.playOneSound(e, sound.url)}
                className="buttons"
                style={{ background: sound.color }}
              ></button>
            ))}
          </div>
          <br />
          <div className="wrapper">
            <div className="Power">
              Power:
              <input type="checkbox" onChange={this.on} />
            </div>
            <br />
            <div className="counter">{counter}</div>
            <br />
            <div className="Strict">
              Strict:
              <input type="checkbox" onChange={this.strictBox} />
            </div>
          </div>
          <br />
          <div className="controls">
            <button onClick={()=> this.playCombinationOfSounds()}>Start</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Controllers;
