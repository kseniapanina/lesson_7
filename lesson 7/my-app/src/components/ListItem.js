import React, { Component } from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import styles from "./style.module.css";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: true,
        }
        this.handleTick = this.handleTick.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    handleTick() {
        this.setState({
            task: !this.state.task,
        })
    }
    
    onDelete() {
        this.props.onDelete(this.props.id);
    }

    render() {
        const {value, id} = this.props;
        return (
            <li key={id} className={styles.list }>
                {value}
                < button onClick={this.handleTick} className={styles.tick }>
                    {this.state.task ?
                        (<FontAwesomeIcon icon={faSquare} />) : (<span> ✔️</span>)
                    }
                </button>

                <button onClick={this.onDelete}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </button>
            </li>
        )
    }

}
export default ListItem;