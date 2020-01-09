import React, { Component } from 'react'
import {pads} from './Sounds'


export default class Buttons extends Component {

    playSound=url=>{
        let sound = new Audio(url);
        return sound.play();
    }

    render() {
        console.log(pads)
        return (
            <div>
            {pads.map(sound=>(
            <button style={{background: sound.color}}
            onClick={()=> this.playSound(sound.url)}>
        </button>))}
            </div>
        )
    }
}

