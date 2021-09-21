import React, { Component } from "react";

//非受控組件
export default class FormTest extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const { userName, password } = this;
        alert(`user name is: ${userName.value}, password is ${password.value}`);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Username:{" "}
                    <input
                        ref={(c) => (this.userName = c)}
                        type="text"
                        name="username"
                    />
                    Password:{" "}
                    <input
                        ref={(c) => (this.password = c)}
                        type="password"
                        name="password"
                    />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}
