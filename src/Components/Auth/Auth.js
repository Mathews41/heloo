import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import {addUser} from '../../Redux/reducer'

import './Auth.css'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            display: true,
            email: '',
            password: '',
            error: false,
            errorMessage: '',

        }
    }
    changeDisplay = () => {
        this.setState({
            display: !this.state.display,
            email: '',
            password: '',
            error: false,
            errorMessage: '',

        })
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        const {email, password} = this.state
        axios.post('http://localhost:4000/auth/login', {email, password})
        .then(response => {
            this.props.addUser(response.data)
            if(this.state.error !== true){
                this.props.history.push('/dashboard')
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    register = () => {
        const {email, password} = this.state;
        axios.post('http://localhost:4000/auth/register', {email, password})
        .then(response => {
            this.props.addUser(response.data)
            if(this.state.error !== true){
                this.props.history.push('/dashboard')
            }
        })
        .catch(error => {
            console.log(error)
    })
}
    render() {
        console.log(this.props)
        return (
            <div className='auth-container'>
                {
                    this.state.error ?
                    (
                        <div className='error'>
                            {this.state.errorMessage}
                        </div>
                    )
                    :
                    null
                }
                {
                    this.state.display ?
                    (<div className={
                        this.state.error ?
                        'login-container shake'
                        :
                        'login-container'
                    }>
                        <input type = 'email'
                            placeholder = 'email'
                            className = 'login-input'
                            name = 'email'
                            value = {this.state.email}
                            onChange = {this.handleChange}/>
                        <input type = 'password'
                            placeholder = 'password'
                            className = 'login-input'
                            name = 'password'
                            value = {this.state.password}
                            onChange = {this.handleChange}/>
                        <button className = 'btn login' onClick={this.login}>Login</button>
                        <button className = 'btn register' onClick={this.changeDisplay}>Register</button>

                             </div> )
                             :
                    (<div className='register-container'>
                        <input type = 'email'
                            placeholder = 'email'
                            className = 'login-input'
                            name = 'email'
                            value = {this.state.email}
                            onChange = {this.handleChange}/>
                        <input type = 'password'
                            placeholder = 'password'
                            className = 'login-input'
                            name = 'password'
                            value = {this.state.password}
                            onChange = {this.handleChange}/>
                        <button className = 'btn login' onClick={this.register}>Sign Up</button>
                        <button className = 'btn register' onClick={this.changeDisplay}>Cancel</button>
                             </div>)
                       
                }
                
           </div>
        )
    }
};

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addUser}) (Auth);