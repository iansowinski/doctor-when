import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Timer extends Component { 
  constructor(props){
    super(props)
    this.state = {startTime: new Date(), timeDifference: 0}
    this.tick = this.tick.bind(this)
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  tick(){ 
    const timeNow = new Date()
    const timePassed = Math.floor((timeNow.getTime() - this.state.startTime.getTime()) / 1000)
    this.setState((prevState, props) => {
      return {timeDifference: timePassed, startTime: prevState.startTime}
    })
    if (timePassed === 60 * 25) {
      new Audio('https://www.myinstants.com/media/sounds/tindeck_1.mp3').play()
    }
  }
  render() {
    if (this.state.timeDifference < 60){
      return <h2>Time passed: {this.state.timeDifference} s.</h2>
    }else if (this.state.timeDifference >= 60){
      return <h2>Time passed: {Math.floor(this.state.timeDifference / 60)} min. {this.state.timeDifference % 60} s.</h2>
    }
    return <h2>ERROR</h2>
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">DOCTOR WHEN</h1>
        </header>
        <p>
         Welcome to doctor when!
        </p>
        <Timer/> 
      </div>
    );
  }
}

export default App;
