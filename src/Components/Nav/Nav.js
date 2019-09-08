import React, { Component } from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from './../../Redux/reducer'
import axios from 'axios'
import './Nav.css'
import * as Icon from 'react-feather'

class Nav extends Component {
    // componentDidMount(){
        
    // logout = () => {
    //     axios.post('/api/auth/logout').then(res => {
    //         this.props.history.push('/')            
    //         })
    //     }
    // }

    render() {
        if (this.props.location.pathname !== '/'){
            return (
                <div className='navbar'>
                    
                    <img className='profilepic' src={this.props.profile_pic}/>
                    {this.props.email}
                    <Link to='/dashboard'>
                        <Icon.Home/>
                    </Link>
                    <Link to='newPost'>
                        <Icon.Plus/>
                    </Link>
                    <Link to='/'>
                        <Icon.Power onClick={this.logout}/>
                    </Link>


                </div>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps(reduxState) {
    const {email,userId,profile_pic} = reduxState
    return {email,userId,profile_pic}
}

export default withRouter(connect(mapStateToProps, {addUser})(Nav))
