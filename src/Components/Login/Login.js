import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Route,  Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Home from '../Home/Home';
import {login} from '../../Redux/reducer'
class Login extends Component {
    constructor(){
        super()
        this.state = {
            LogIn: false,
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsername = (value) => {
        this.setState({username: value})
    };

    handlePassword = (value) => {
        this.setState({password: value})
    };

    handleLogin = (username,password) => {
        this.props.login(username,password).then(response => {
            this.setState({username: response.value.data.username, LogIn:true})
        })
    }



render (){

    const {LogIn,username,password} = this.state;
    if(LogIn){
        return <Redirect to='browse'/>
    }
    return(

        <div>
        <p>Sign In</p>
        <input className='usernameInput'
        placeholder='username'
        value={username}
        onChange={event => this.handleUsername(event.target.value)}/>
        <input className='passwordInput'
        placeholder='password'
        value={password}
        onChange={event => this.handlePassword(event.target.value)}/>
        <br/>
        <button onClick={()=> this.handleLogin(username,password)}>Sign In</button>
        <br/>
        <p>New to Cisney+ ?</p>
        <p>Sign up!</p>

    </div>
        )
}
}
function mapStateToProps(state){
    return{
        user: state.user
    }
}
export default connect(mapStateToProps, {login}) (Login);