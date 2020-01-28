import React, { Component } from "react";
import { initalPads } from "./Sounds";


export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pads: initalPads,
      computerMoves : [1,1,2,3,0],
      playersMoves:[]
    };
  }

playersTurn=()=>{
  const {playersMoves,pads}=this.state
playersMoves.push(pads)
console.log("asjfdk",pads[0].color)
}

  playSound = url => {
    let sound = new Audio(url);
    return sound.play();
  };

  startButton=()=> {
    const { pads , computerMoves } = this.state;

    var i = 0;
    var newPads = JSON.parse(JSON.stringify(this.state.pads));
    var interval = setInterval(() => {
      var index = i;
      pads[computerMoves[index]].color = "white";
      console.log("check out random color moves",pads[computerMoves[index]].color)
      

      this.setState({ pads });
      setTimeout(() => {
        pads[computerMoves[index]].color = newPads[computerMoves[index]].color;

        this.setState({
          pads: newPads
        });
      }, 500);

      if (index == 4) {
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
              onClick={this.playersTurn}
            ></button>
          ))}
          <button onClick={()=>this.startButton()}>Start</button>
        </div>
      </div>
    );
  }
}
