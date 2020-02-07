import React, { Component } from "react";
import { initalPads } from "./Audio";

class Controllers extends Component {
  constructor() {
    super();
    
    this.state = {
      counter: 0,
      buttons: [],
      flash: {},
      computerMoves:[],
      playersMoves:[],
      randomButtons: initalPads
    };
  }

  componentDidMount() {
    this.setState({ buttons: initalPads });
  }
  flickButtons = id => {
    console.log("refs",this.refs)
    const { buttons,playersMoves } = this.state;
    var index = buttons.findIndex(sound => sound.id == id);
    playersMoves.push(index)
    console.log("players Moves",playersMoves)
    if (id === id) {
        this.refs[id].style.background="white"
        // document.getElementById(id).style.background = buttons[index].color;
      setTimeout(() => {
        this.refs[id].style.background=buttons[index].color
        // document.getElementById(id).style.background = buttons[index].color;
      }, 300);
    }
  };

  RandomFickButtons=()=>{
    
  }

  playOneSound = (e, url) => {
    var sound = new Audio(url);
    this.setState({ flash: { id: e.target.id, state: true } });
    this.flickButtons(e.target.id);
    return sound.play();
  };

  playCombinationOfSounds =(id) => {
    const { randomButtons,buttons,computerMoves } = this.state;
    for (let index = 0; index < 4; index++) {
      this.refs[id].style.background="white"

      this.setState({randomButtons });
      setTimeout(() => {
        this.refs[id].style.background = buttons[index].color;
        computerMoves.push(buttons[index].id);
        console.log("play combo",buttons[index].color)

        // this.setState({
        //   randomButtons: newPads
        // });
      }, 500);
      
    }
   
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
            <button onClick={ this.playCombinationOfSounds}>Start</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Controllers;
