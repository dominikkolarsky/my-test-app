import React, { Component } from 'react'

export default class Cat extends Component {
    handleDelete = (cat) => {
        this.props.onDelete(cat)
    }

    render() {
        return (
            <li key={this.props.id}>{this.props.name} says: {this.props.sound}  <button onClick={() => this.handleDelete(this.props.cat
                )}>Delete</button>
            </li>
        )
    }
}
