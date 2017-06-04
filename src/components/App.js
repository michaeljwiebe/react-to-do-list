import React, { Component } from "react";
import logo from "../logo.svg";
import "../css/App.css";

import DisplayToDos from "./DisplayToDos";

// As a user, I will be able to mark a to-do as completed. There should be a visual indication of completion.
// As a user, I will be able to unmark a to-do as completed.
// As a user, I should be able to view my To-Dos in order of priority. For instance, if I create a high-priority To-Do, it should show up near the top of my list that already exists. There should be a visual indication of higher vs lower priorities, like different colors or larger font.

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [
                { text: "walk the dog", priority: "medium" },
                { text: "eat breakfast", priority: "low" }
            ],
            completedToDos: [],
            newToDo: "",
            newPriority: ""
        };
        this.addToDo = this.addToDo.bind(this);
        this.updateToDo = this.updateToDo.bind(this);
        this.updatePriority = this.updatePriority.bind(this);
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <input onChange={this.updateToDo} value={this.state.newToDo} />
                <select
                    onChange={this.updatePriority}
                    value={this.state.newPriority}
                >
                    <option value="" />
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
                <button onClick={this.addToDo}>Add To Do</button>
                <DisplayToDos toDos={this.state.toDos} />
            </div>
        );
    }
    updateToDo(event) {
        this.setState({ newToDo: event.target.value });
    }

    updatePriority(event) {
        this.setState({ newPriority: event.target.value });
    }

    addToDo() {
        this.state.toDos.push({
            text: this.state.newToDo,
            priority: this.state.newPriority
        });
        let newList = this.state.toDos;
        this.setState({
            toDos: newList
        });
    }
}

export default App;
