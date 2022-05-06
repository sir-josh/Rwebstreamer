import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput({ input, label, meta }){
    console.log(meta);
    return (
      <div className='field'>
          <label>{label}</label>
          <input {...input} />
          <div>{meta.error}</div>
      </div>
    );
  }

  onFormSubmit(formValues){
    console.log(formValues);
  }

  render() {
    return (
      <form className='ui form' onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name='title' component={this.renderInput} label="Stream Title" />
        <Field name='description' component={this.renderInput} label="Stream Description" />
        <button className='ui button primary'>Proceed</button>
      </form>
    )
  }
}

const validateForm = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter stream title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  
  return errors;
}

export default reduxForm({
  form: 'streamCreate',
  validate: validateForm
})(StreamCreate);