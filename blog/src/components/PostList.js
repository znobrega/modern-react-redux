import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPost()
    }

    render() {
        return  <div> test </div> 
    }
}

export default connect(null, { fetchPosts })(PostList)