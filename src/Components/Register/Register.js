import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (event) => {
this.setState({[event.target.name]: event.target.value})
    }

handleRegister = () => {
    const {username,password} = this.state;
    axios.post('/auth/register', {username,password})
    .then(response => {
        console.log(response)
    })
}
    render(){
        return (
<div className='registerWrapper'>
<Link to='/browse'>
<button>Sign In</button>
</Link>
<p>Create an account</p>
<input name='username' placeholder='username' 
onChange={(event)=> this.handleChange}/>
<input name='password' placeholder='password'
onChange={(event) => this.handleChange}/>
<br/>
<Link to='/browse'>
<button 
className='nextButton' 
placeholder='username'
onChange={(event)=> this.handleRegister}>Next</button>
</Link>
</div>
        )
    }
}

export default Register;