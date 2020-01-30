import React, { Component } from "react";
import { initalPads } from "./Sounds";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pads: initalPads,
      computerMoves: [],
      playersMoves: [],
      on: false,
      counter: 0,
      strict:false,
      win:true,
      computureTurn:false
    };
  }

  playersTurn = sound => {
    const { playersMoves } = this.state;
    var array = playersMoves;
    var pressedButton = sound.id;
    array.push(pressedButton);

    console.log("asjfdk", array);
  };

  playSound = url => {
    let sound = new Audio(url);
    return sound.play();
  };

  on=()=>{
    this.setState({
      on: !this.state.on,
      computureTurn:!this.state.computureTurn
    })

    // console.log("swa",this.state.on)
  }
  strictBox=()=>{
    // console.log("checked")
    
  }

  play = () => {
    const { pads, computerMoves , computureTurn} = this.state;
    if(this.state.on || computureTurn){

      for(var i =0; i<20;i++){
        computerMoves.push(Math.floor(Math.random()* 4)+1)
        console.log("random moves",computerMoves)
        
      }
      var i = computerMoves[0];
      console.log("checking",i)
      var newPads = JSON.parse(JSON.stringify(pads));
      var interval = setInterval(() => {
        var index = i;
        pads[index].color = "white";
        console.log("check out random color moves", pads[index].color);
  
        this.setState({ pads });
        setTimeout(() => {
          pads[index].color = newPads[index].color;
          computerMoves.push(pads[index].id);
          console.log("pads", index);
  
          this.setState({
            pads: newPads
          });
        }, 500);
  
        if (index == index.length) {
          console.log("gsdf",index.length)
          clearInterval(interval);
        }
  
        i++;
      }, 1000);
    }
  };

  startButton = () => {
    this.play();
  };

  render() {
    const { counter } = this.state;
    return (
      <div className="onButton">
      <header id='header'>Simon game</header>
        <div className="container">
          <div className="button-container">
          {this.state.pads.map(sound => (
            <button className="buttons"
              style={{ background: sound.color }}
              onClick={() => this.playersTurn(sound)}
            ></button>
          ))}
          </div>
          <br/>
          <div className="wrapper">
            <div className="Power">
              Power:
              <input type="checkbox" onChange={this.on} />
            </div>
            <br/>
            <div className="counter">{counter}</div>
            <br/>
            <div className="Strict">
              Strict:<input type="checkbox" onChange={this.strictBox} />
            </div>
          </div>
          <br/>
          <div className="controls">
          <button onClick={() => this.startButton()}>Start</button>
            <button>Reset</button>
            </div>
        </div>
      </div>
    );
  }
}
