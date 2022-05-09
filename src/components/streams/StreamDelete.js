import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream } from '../../actions';

class StreamDelete extends Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  showActionButtons(){
    return (
      <Fragment>
        <button className='ui button black'>Delete</button>
        <Link to="/" className='ui cancel button'>Cancel</Link>
      </Fragment>
    );
  }

  showModalContent(){
    if(!this.props.stream){
      return 'Are sure you want to delete this stream?'
    }

    return <div>Are sure you want to delete this stream with title: <b>{this.props.stream.title}</b></div>
  }

  render() {
    return (
      <div>
        <Modal 
          title="Delete Stream"
          content={this.showModalContent()}
          actions={this.showActionButtons()}
          onDismiss ={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect( mapStateToProps, { fetchStream })(StreamDelete);