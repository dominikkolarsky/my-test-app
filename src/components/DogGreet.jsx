import React, { Component } from 'react'

export default class DogGreet extends Component {
  render() {
    return (
      <div>Hi, I am {this.props.dogName}</div>
    )
  }
}
