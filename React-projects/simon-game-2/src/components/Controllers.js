import React, { Component } from "react";
import { initalPads } from "./Audio";

class Controllers extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
      buttons: [],
      flash: {}
    };
  }

  componentDidMount() {
    this.setState({ buttons: initalPads });
  }
  flickButtons = id => {
    const { buttons } = this.state;
    var index = buttons.findIndex(sound => sound.id == id);
    console.log("check",id)
    if (id == id) {
      document.getElementById(id).style.background = "white";
      setTimeout(() => {
        document.getElementById(id).style.background = buttons[index].color;
      }, 300);
    }
  };

  playOneSound = (e, url) => {
    var sound = new Audio(url);
    this.setState({ flash: { id: e.target.id, state: true } });
    this.flickButtons(e.target.id);
    return sound.play();
  };

  playCombinationOfSounds = sound => {
    // let sound= new Audio(sound.id)
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
            <button>Start</button>
            <button>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Controllers;
