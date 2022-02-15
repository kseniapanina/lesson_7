import React, { Component } from 'react';
import Header from './Header';
import List from './List';
import SubmitForms from './SubmitForms';
import styles from "./style.module.css";

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    }
    handleDeleteTodo(id) {
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== id)
        })
    }

    handleAddTodo(value) {

        this.setState({
            tasks: [...this.state.tasks, value]
        })
    }
    render() {

        return (
            <div className={styles.container }>
                <Header taskCounter={this.state.tasks.length} />
                <SubmitForms onAddTodo={this.handleAddTodo} />
                <List list={this.state.tasks} onDelete={this.handleDeleteTodo} />
            </div>
        )
    }
}
export default ToDoList;