import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class PubSubTest extends Component {
    state = {
        test: "",
    };
    componentDidMount() {
        this.token = PubSub.subscribe("testSub", (msg, data) => {
            this.setState(data);
        });
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.token);
    }
    render() {
        return <div>{`name = ${this.state.test}`}</div>;
    }
}
