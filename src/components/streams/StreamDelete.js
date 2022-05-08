import React, { Fragment } from 'react';
import Modal from '../Modal';
import history from '../../history';

function StreamDelete() {
  const actions = (
    <Fragment>
      <button className='ui button black'>Delete</button>
      <button className='ui cancel button'>Cancel</button>
    </Fragment>
  );

  return (
    <div>
      <Modal 
        title="Delete Stream"
        content="Are sure you want to delete this stream?"
        actions={actions}
        onDismiss ={() => history.push('/')}
      />
    </div>
  )
}

export default StreamDelete;