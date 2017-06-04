import React, { Component } from "react";
// how do I interact with the database from react?
class Toggler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false
        };
        this.ToggleComplete = this.ToggleComplete.bind(this);
    }

    render() {
        return (
            <div>
                <input type="checkbox" onClick={this.ToggleComplete} />
            </div>
        );
    }

    ToggleComplete() {
        this.setState({ complete: !this.state.complete });
    }
}

export default Toggler;
