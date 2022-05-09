import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props){
    super(props);

    this.videoRef = createRef();
  }

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
    
    this.buildStreamPlayer();
  }

  componentDidUpdate(){
    this.buildStreamPlayer();
  }

  buildStreamPlayer(){
    if (this.streamPlayer || !this.props.stream) {
      return;
    }

    this.streamPlayer = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    this.streamPlayer.attachMediaElement(this.videoRef.current);
    this.streamPlayer.load();
  }
  
  render(){
    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <video ref={this.videoRef}  style={{ width: '100%'}} controls />
        <h3>{this.props.stream.title}</h3>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream})(StreamShow);