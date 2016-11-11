import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTubePlayer from './YouTubeVideoPlayer';
import rooms from './db'
console.log(rooms.room1.videoId);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0,
      playerState: true
    }
  }

  onStateChange(event) {
    var playerState = event.target.getPlayerState();

  }

  updateCurrentTime(timeText) {
    const currentTime = Number(timeText);
    console.log('updateCurrentTime:', currentTime);
    this.setState({currentTime});
  }


  render() {
    var room = 'room1' //hardcoded for now
    return (
      <div className="App">
        <button onClick={() => this.setState({playerState: !this.state.playerState})}>click here</button>
        <input
          onChange={(e) => this.updateCurrentTime(e.target.value)}>
        </input>

        <YouTubePlayer
          YTid= {rooms[room].videoId}
          currentTime={this.state.currentTime}
          playerState={this.state.playerState}
          onStateChange={this.onStateChange.bind(this)} />
        <YouTubePlayer
          YTid= {rooms[room].videoId}
          currentTime={this.state.currentTime}
          playerState={this.state.playerState}
          onStateChange={this.onStateChange.bind(this)} />
        <div>{this.state.playerState}: {this.state.CurrentTime}</div>
      </div>
    );
  }
}

export default App;
