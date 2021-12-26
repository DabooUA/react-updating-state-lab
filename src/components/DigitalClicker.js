import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  handleCkick = () => {
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked + 1
    }))
  }

  render() {
    return (
      <button onClick={this.handleCkick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
