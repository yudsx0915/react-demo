import React, { Component } from "react";

//this ref code is old style, will be deprecated
export default class ButtonTest extends Component {
    showData = () => {
        const { input1 } = this.refs;
        alert(input1.value);
    };
    showData2 = () => {
        const { input2 } = this.refs;
        alert(input2.value);
    };
    render() {
        return (
            <div>
                <input ref="input1" type="text" placeholder="press for hint" />
                <button ref="button1" onClick={this.showData}>
                    Press Me!
                </button>
                <input
                    ref="input2"
                    onBlur={this.showData2}
                    type="text"
                    placeholder="lost focus"
                />
            </div>
        );
    }
}
