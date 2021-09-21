import React, { Component } from "react";

//call back ref, input1 and input2's method are diffrent, but both will be ok
export default class ButtonTest2 extends Component {
    showData = () => {
        const { input1 } = this;
        alert(input1.value);
    };
    showData2 = () => {
        const { input2 } = this;
        alert(input2.value);
    };
    saveInout2 = (element) => {
        this.input2 = element;
    };
    render() {
        return (
            <div>
                <input
                    ref={(current) => {
                        this.input1 = current;
                    }}
                    type="text"
                    placeholder="press for hint"
                />
                <button onClick={this.showData}>Press Me!</button>
                <input
                    ref={this.saveInout2}
                    onBlur={this.showData2}
                    type="text"
                    placeholder="lost focus"
                />
            </div>
        );
    }
}
