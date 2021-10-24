import React, { Component } from "react";
import axios from "axios";
import PubSub from "pubsub-js";

import PubSubTest from "./components/PubSubTest";
export default class AxiosApp extends Component {
    getStudentData = () => {
        axios.get("http://localhost:3000").then(
            (response) => {
                console.log("Get Success", response.data);
            },
            (error) => {
                console.log("error: ", error);
            }
        );
    };
    testPubSub = () => {
        PubSub.publish("testSub", { test: "123" });
    };
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>Get Student Data</button>
                <button onClick={this.testPubSub}>Test PubSub</button>
                <PubSubTest />
            </div>
        );
    }
}
