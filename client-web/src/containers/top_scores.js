import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateHighScore } from '../actions/index.js';
import { bindActionCreators } from 'redux';

export class TopScores extends Component {

  componentWillMount() {
    var context = this;
    socket.emit('getHighScores');
    socket.on('getHighScores', function (scores) {
      //format of data received from DB: ["Carol", "300", "Bob", "100", "mj", "2", "Alice", "1"]
      // highest score will be on front of the array
      context.props.updateHighScore(scores);
    });
  }

  saveHighScore() {
    var finalScores = this.props.scores; //finalScores: [ { id: 'mj', score: -15 } ]
    console.log(finalScores, 'component sending final scores')
    // save high scores in redis
    socket.emit('saveHighScores', finalScores);
  }

  renderScore() {

    var rows = [];
    for (var i = 0; i < this.props.highScores.length; i += 2) {
      rows.push(
        <li className='col-md-9'>{this.props.highScores[i]}:  <span style={{float:'right'}}>{this.props.highScores[i+1]}</span></li>
      );
    }
    return rows;
  }

  render() {

    // To uncomment when running db
    if (this.props.endification) {
      this.saveHighScore();
    }

    return (
      <div id='topScores'>
        <div className="row">
          <h1>Leader Board:</h1>
          <ul>
            { this.renderScore() }
          </ul>
        </div>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return {
    scores: state.scores,
    highScores: state.highScores,
    endification: state.endification
  }
};

var mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateHighScore: updateHighScore
  }, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(TopScores);