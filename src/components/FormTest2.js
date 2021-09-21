import React, { Component } from "react";

//受控組件
export default class FormTest2 extends Component {
    state = {
        userName: "",
        password: "",
    };

    saveUserName = (event) => {
        this.setState({ userName: event.target.value });
    };
    savePassword = (event) => {
        this.setState({ password: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const { userName, password } = this.state;
        alert(`user name is: ${userName}, password is ${password}`);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Username:{" "}
                    <input
                        onChange={this.saveUserName}
                        type="text"
                        name="username"
                    />
                    Password:{" "}
                    <input
                        onChange={this.savePassword}
                        type="password"
                        name="password"
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
