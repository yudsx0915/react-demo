import React from "react";

export default class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isHot: false,
        };
        this.changeWeather = this.changeWeather.bind(this);
    }

    render() {
        return (
            <div>
                <h1 onClick={this.changeWeather}>
                    The weather is {this.state.isHot ? "hot" : "cold"} today
                </h1>
            </div>
        );
    }

    changeWeather() {
        const isHot = this.state.isHot;
        this.setState({ isHot: !isHot });
    }
}
