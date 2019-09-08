import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {
    state = {
        post: []
    }

    componentDidMount(){
        this.makePost()
    }
    makePost = () => {
        const {postid} = this.props.match.params
        axios.get(`/api/post/${postid}`).then(res =>{
            console.log(postid)
            this.setState({
                post: res.data
            })
        })
    }

    render() {
        console.log(this.props.match.params.postid)
        console.log(this.state)
        let mappedPost = this.state.post.map(post => {
        return (
            <div className='posts'>
                <div key ={post.id}>
                    <h1> Title:{post.title}</h1>
                    <h1> Content:{post.content}</h1>
                </div>
                <img src={post.img} alt = 'post'/>
                <img src = {post.profile_pic} alt='profile'/>
            </div>
        )
        })
        return (
            <div>
                post
            </div>
        )
    }
}
