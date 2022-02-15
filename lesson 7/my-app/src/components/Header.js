import React, { Component } from 'react';
import styles from "./style.module.css";


class Header extends Component {

    render() {
        return (
            <header className={styles.header }>
                You have {this.props.taskCounter} todos
            </header>
        )
    }
}
export default Header;