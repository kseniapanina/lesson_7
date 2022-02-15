import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {
  

    render() {
        return (
            <ul>
                {this.props.list.map(({ id, value }) => <ListItem id={id} value={value} onDelete={this.props.onDelete} />)}
            </ul>
        )
    }
}
export default List;