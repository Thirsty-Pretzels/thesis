import React, { Component } from 'react';
import Board from './board';
import PlayGround from './playGround';
import ScoreBoard from './scoreBoard';
import GameStatus from './gameStatus';
import Loot from '../components/loot';
import BoardOverview from './boardOverview';
import { connect } from 'react-redux';

class GamePlay extends Component {

  componentDidMount() {
    document.getElementById('playGround').focus();
  }

  reFocus() {
    document.getElementById('playGround').focus();
  }

  render() {
    return (
      this.props.userStatus ?
      <div onClick={ this.reFocus }>
        <div id='section1'>
          <PlayGround redirect={this.props.redirect}/>
          <Board />
        </div>
        <div id='section2'>
          <Loot loot={ this.props.loot }/>
          <BoardOverview />
          <ScoreBoard />
          <GameStatus />
          <audio
            ref="audio_tag" 
            src="../../music/Mars.wav" 
            //autoPlay="autoplay"
            controls="controls"
            loop="loop"
          />
        </div>
      </div>
      :
      <div>{ this.props.redirect('') }</div>
    );
  }
}


var mapStateToProps = (state) => {
  return {
    userStatus: state.userInfo.status,
    loot: state.loot
  }
}

export default connect(mapStateToProps)(GamePlay);




