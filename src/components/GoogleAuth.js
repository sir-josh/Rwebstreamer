import React, { Component } from 'react';

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

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
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
                <button onClick={this.onSignIn} className='ui red small google button g-signin2' data-onsuccess="onSignIn">
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

export default GoogleAuth;
