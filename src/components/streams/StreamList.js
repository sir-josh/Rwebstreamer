import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount(){
    this.props.fetchAllStreams();
  }

  render() {
    return (
      <div>StreamList</div>
    )
  }
}

export default connect(null, { fetchAllStreams })(StreamList);