import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className='field'>
          <label>{label}</label>
          <input {...input} autoComplete="off" />
          {/* <div>{meta.error}</div> */}
          {this.renderError(meta)}
      </div>
    );
  }

  renderError({ error, touched}){
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div>{error}</div>
        </div>
      );
    }
  }

  onFormSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className='ui form error' onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
        <Field name='title' component={this.renderInput} label="Stream Title" />
        <Field name='description' component={this.renderInput} label="Stream Description" />
        <button className='ui button black'>Proceed</button>
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
  form: 'streamForm',
  validate: validateForm
})(StreamForm);
