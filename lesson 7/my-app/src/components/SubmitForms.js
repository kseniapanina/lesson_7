import React, { Component } from 'react';
import { v4 } from 'uuid';
import {ReactComponent as Logo} from './logo.svg';
import styles from "./style.module.css";

class SubmitForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.hanleAddTodo = this.hanleAddTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value })
    }

    hanleAddTodo(e) {
        e.preventDefault();

        if (this.state.value) {
            this.props.onAddTodo({
                id: v4(),
                value: this.state.value
            });
            this.setState({ value: "" })
        };
    }
    render() {
        return (
            <form onSubmit={this.hanleAddTodo}>
                <input type="text " value={this.state.value} onChange={this.handleChange} />
                <button >
                    Add to list
                    <Logo className={styles.logo } height = "15" width ="15"/>
                </button>
            </form>
        )
    }
}
export default SubmitForms;