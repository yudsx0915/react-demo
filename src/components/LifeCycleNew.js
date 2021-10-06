import React, { Component } from "react";
import { unmountComponentAtNode } from "react-dom";

export default class LifeCycleNew extends Component {
    state = { opacity: 1, count: 0 };
    death = () => {
        unmountComponentAtNode(document.getElementById("root"));
    };
    addCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // do before render, rarely use, not recommend
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        // return { count: 108 };
        return null;
    }

    //after component mounted
    componentDidMount() {
        console.log("componentDidMount");
        // this.timer = setInterval(() => {
        //     let { opacity } = this.state;
        //     opacity -= 0.1;
        //     if (opacity <= 0) {
        //         opacity = 1;
        //     }
        //     this.setState({ opacity: opacity });
        // }, 200);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate", prevProps, prevState);
        return "Corey";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate", prevProps, prevState, snapshot);
    }

    //component will unmount
    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer);
    }
    render() {
        console.log("render");
        return (
            <div>
                <h2>Total Count: {this.state.count}</h2>
                <h2 style={{ opacity: this.state.opacity }}>
                    React is so hard!!
                </h2>
                <button onClick={this.death}>Die!!!</button>
                <button onClick={this.addCount}>click +1</button>
            </div>
        );
    }
}
