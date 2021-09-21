import React, { Component } from "react";

//createRef, React recommend
export default class ButtonTest3 extends Component {
    input1 = React.createRef();
    state = { isHot: true };
    showData = () => {
        const { input1 } = this;
        alert(input1.current.value);
    };
    showData2 = (event) => {
        alert(event.target.value);
    };
    changeWeather = () => {
        this.setState({ isHot: !this.state.isHot });
    };
    render() {
        return (
            <div>
                <h2>Today is {this.state.isHot ? "hot" : "cold"}</h2>
                <input
                    ref={this.input1}
                    type="text"
                    placeholder="press for hint"
                />
                <button onClick={this.showData}>Press Me!!</button>
                <button onClick={this.changeWeather}>
                    Press to change weather
                </button>
                <input
                    onBlur={this.showData2}
                    type="text"
                    placeholder="lost focus"
                />
            </div>
        );
    }
}
