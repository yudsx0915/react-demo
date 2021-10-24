import React, { Component } from "react";

export default class About extends Component {
    render() {
        console.log(this.props);
        // this.props.history.replace("/home");
        return (
            <div>
                <h3>我是About內容</h3>
            </div>
        );
    }
}
