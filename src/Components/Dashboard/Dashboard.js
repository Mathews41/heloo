import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Dashboard.css'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            display: true,
            posts: [],
            search:'',
            userposts: true
        }
    }
    componentDidMount(){
        this.getPosts()
    }

    searchBar = () => {
        const {search} = this.state
        const {userId} = this.props
        axios.get(`/api/posts/:userid?title=${search}&userposts=${!this.state.userposts}`)
        .then(res => {
            this.setState({
                posts: res.data
            })
            console.log(res.data)
        })
    }
   

    flipPost = () => {
        this.setState({
        userposts: !this.state.userposts
    })
    }
    
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getPosts = () => {
        axios.get('/api/posts').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }
    render() {
        let mapped = this.state.posts.map(post => {
            return (
               
            <Link to {...`/post/${post.id}`}>
                <div className='mappedposts'>
                    <div className='title'>{post.title}</div>
                    <div className='content'>{post.content}</div>
                    <div className='user'>{post.email}</div>
                    <img src={post.profile_pic} alt='profile'/>
                </div>
            </Link>
            )
        })
        console.log(this.props)
        return (
            <div className='searchbar'>
                <input onChange={this.handleChange} name='search' type='text'/>
                <button onClick = {this.searchTitle}>Search</button>
                <input onChange={this.flipPost} name='userposts\'type='checkbox'/>
                My Posts
                {mapped}
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(Dashboard)