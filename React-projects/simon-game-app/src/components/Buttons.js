import React, { Component } from "react";
import { initalPads } from "./Sounds";


export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pads: initalPads,
      computerMoves : [2]
    };
  }

  playSound = url => {
    let sound = new Audio(url);
    return sound.play();
  };

  startButton() {
    const { pads , computerMoves } = this.state;

    var i = 0;
    var newPads = JSON.parse(JSON.stringify(this.state.pads));
    var interval = setInterval(() => {
      var index = i;
      pads[index].color = "white";
      

      this.setState({ pads });
      setTimeout(() => {
        pads[index].color = newPads[index].color;

        this.setState({
          pads: newPads
        });
      }, 500);

      if (index == 3) {
        clearInterval(interval);
      }

      i++;
    }, 1000);
  }

  render() {
    return (
      <div className="onButton">
        <div className="container">
          {this.state.pads.map(sound => (
            <button
              style={{ background: sound.color }}
              onClick={() => this.playSound(sound.url)}
            ></button>
          ))}
          <button onClick={() => this.startButton()}>Start</button>
        </div>
      </div>
    );
  }
}
