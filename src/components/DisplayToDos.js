import React, { Component } from "react";

import Toggler from "./Toggler";

function DisplayToDos(props) {
    let toDoList = props.toDos.map(function(toDo, index) {
        return (
            <div key={index} className="todo-container">
                <div className="todo-name">{toDo.text}</div>
                <div className="todo-priority">{toDo.priority}</div>
                <Toggler />
            </div>
        );
    });
    return (
        <div>
            <div>To Do List</div>
            <div>{toDoList}</div>
        </div>
    );
}

export default DisplayToDos;
