import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount(){
    this.props.fetchAllStreams();
  }

  showButtonIfUser(stream){
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='tiny ui button black'>Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className='tiny ui button'>Delete</Link>
        </div>
      );
    }
  }

  showCreateButton(){
    if(this.props.isSignedIn){
      return (
        <div style={{ marginTop: '30px'}}>
          <Link to="/streams/new" className='ui button black right floated'>Create Stream</Link>
        </div>
      );
    }
  }

  displayStreamList(){
    return this.props.streams.map(stream => {
      return (
        <div className='item' key={stream.id} style={{ padding: "12px 0"}}>
          {this.showButtonIfUser(stream)}
          <i className='large middle aligned icon video' />
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
        <div style={{ marginBottom: "30px"}}>
          {this.showCreateButton()}
          <h2>Streams</h2>
        </div>  

        <div className='ui celled list'>{ this.displayStreamList() }</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    streams: Object.values(state.streams), 
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchAllStreams })(StreamList);