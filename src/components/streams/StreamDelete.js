import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
        <button className='ui cancel button'>Cancel</button>
      </Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal 
          title="Delete Stream"
          content="Are sure you want to delete this stream?"
          actions={this.showActionButtons()}
          onDismiss ={() => history.push('/')}
        />
      </div>
    );
  }
}

export default connect(null, { fetchStream })(StreamDelete);