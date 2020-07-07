import React, { Component } from 'react'

class Clock extends Component {
  state = {
    time: new Date()
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div className='col-md-12 text-center'>
        <h1 className='ticking-clock'>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock