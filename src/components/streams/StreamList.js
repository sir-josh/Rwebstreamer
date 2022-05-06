import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount(){
    this.props.fetchAllStreams();
  }

  displayStreamList(){
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id} style={{ padding: "12px 0"}}>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            <b>{stream.title}</b>
            <div className='description' style={{ marginTop: "5px"}}>{stream.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>{ this.displayStreamList() }</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { streams: Object.values(state.streams) }
}

export default connect(mapStateToProps, { fetchAllStreams })(StreamList);