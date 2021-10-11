import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";

export default class LifeCycle extends Component {
    state = { opacity: 1 };
    death = () => {
        unmountComponentAtNode(document.getElementById("root"));
    };

    componentDidMount() {
        this.timer = setInterval(() => {
            let { opacity } = this.state;
            opacity -= 0.1;
            if (opacity <= 0) {
                opacity = 1;
            }
            this.setState({ opacity: opacity });
        }, 200);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        console.log("render");
        return (
            <div>
                <h2 style={{ opacity: this.state.opacity }}>
                    React is so hard!!
                </h2>
                <button onClick={this.death}>Die!!!</button>
            </div>
        );
    }
}
