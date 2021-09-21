import React, { Component } from "react";

//simple version, don't have to use constructor
export default class Weather2 extends Component {
    state = {
        isHot: false,
        rain: false,
    };
    render() {
        return (
            <div>
                <h1 onClick={this.changeWeather}>
                    The weather is {this.state.isHot ? "hot" : "cold"} today
                </h1>
                <p>{this.state.rain ? "Raining!!" : "Sunshine!!!"}</p>
            </div>
        );
    }
    changeWeather = () => {
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot });
    };
}
