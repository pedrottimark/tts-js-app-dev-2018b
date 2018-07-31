import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: [],
  };

  fetchPostsById(id) {
    return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  componentDidMount() {
    const { id } = this.props;
    this.fetchPostsById(id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if(prevProps.id !== id){
        // console.log(id, prevProps)
        this.fetchPostsById(id);
    }
  }

  render() {
    return (
      <div>
        <h1>Posts for {this.props.id}</h1>
        <ul>
          {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

export default Posts;
