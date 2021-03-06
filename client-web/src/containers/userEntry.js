import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class RoomList extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <div className='col-md-6' style={{margin: '10px 0 5px 0'}}>
        <img
          src={'../../images/user'+this.props.roomInfo.userList[this.props.user].userCode+'.png'}
          style={{
            width: '70px',
            height: '70px',
            'border-radius': '35px',
            display: 'inline-block',
            marginRight: '20px'}}/>
        <h2
          style={{
            display: 'inline-block',
            marginRight: '10px'}}>
            {this.props.user}
        </h2>
        <h4
          style={{
            display: 'inline-block'}}>
          {this.props.roomInfo.userList[this.props.user].readyStatus ? ' Ready!' : ' waiting...'}
        </h4>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    roomInfo: state.roomInfo
  };
};

export default connect(mapStateToProps)(RoomList);