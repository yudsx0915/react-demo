import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Person extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
    };
    static defaultProps = {
        age: 18,
    };
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <h1>
                    My name is {name}, Im {age} years old
                </h1>
            </div>
        );
    }
}
