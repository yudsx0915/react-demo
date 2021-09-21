import React, { Component } from "react";

//受控組件+Currying
export default class FormTest2 extends Component {
    state = {
        userName: "",
        password: "",
    };

    saveFormData = (dataType) => {
        return (event) => {
            this.setState({ [dataType]: event.target.value });
        };
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
                        onChange={this.saveFormData("userName")}
                        type="text"
                        name="username"
                    />
                    Password:{" "}
                    <input
                        onChange={this.saveFormData("password")}
                        type="password"
                        name="password"
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
