import React from 'react';
import { Component } from 'react'


class Activities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoName: '',
            listOfTodos: []
        }
    }

    handleClick = () => {
        console.log("checking", this.state.todoName)
        const newList = this.state.listOfTodos.push({ name: this.state.todoName
        ,isDone: false
        })
        console.log("newlIst", this.state.listOfTodos)
        this.setState({
            listOfTodos: this.state.listOfTodos,
        })
    }

    handleChange = (event) => {
        this.setState({
            todoName: event.target.value
        })
    }

    handleCheck = ( index) =>{
        // console.log("check value" , event)
        console.log("check index" , index.target)
        // this.setState({
        
        // })
    }

    handleCheckBox = (selectedName) => {
        let listOfTodos = this.state.listOfTodos
        listOfTodos.forEach(todo => {
           if (todo.name === selectedName)
              todo.isDone =  !todo.isDone
        })
        this.setState({listOfTodos: listOfTodos})
      }

    render() {

        const { listOfTodos, todoName } = this.state;
          console.log(this.state.listOfTodos)
        return (
            <div>
                <h1>To Do App</h1>
                <input type='text' value={todoName} onChange={(event) => this.handleChange(event)} />
                <button onClick={this.handleClick}>enter</button>
                {listOfTodos.map(todo => (<div
                    key={todo}>
                    <div style={{display:"flex"}}>
                        <h2>{todo.name}</h2>
                        <input style={{ alignSelf: "center"}} checked={todo.isDone}
                         onChange={() => this.handleCheckBox(todo.name)}
                        type="checkbox" />
                    </div>
                </div>))}
            </div>

        )
    }
}

export default Activities;