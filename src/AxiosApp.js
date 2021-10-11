import React, { Component } from "react";
import axios from "axios";

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
    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>Get Student Data</button>
            </div>
        );
    }
}
