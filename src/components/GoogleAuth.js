import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
    state = {
         isSignedIn: null
    }

    componentDidMount(){
        try {
            window.gapi.load('auth2', ()=>{
                window.gapi.auth2.init({
                    client_id: process.env.REACT_APP_GAPI_KEY,
                    scope: 'email'
                }).then(()=> {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    onAuthChange = (isSignedInFlag) => {
        if (isSignedInFlag) {
            this.props.signIn();   //Tell the reducer that the user has signed in -- True
        }else {
            this.props.signOut();  //Tell the reducer that the user has signed out  -- False
        }
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null) {
            return null
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className='ui red small google button'>
                    <i className='google icon' />
                    Sign out
                </button>);
        } else {
            return (
                <button onClick={this.onSignIn} className='ui red small google button'>
                    <i className='google icon' />
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
        return (
        <div>{this.renderAuthButton()}</div>
        )
    }
}

export default connect(null, { signIn, signOut })(GoogleAuth);
