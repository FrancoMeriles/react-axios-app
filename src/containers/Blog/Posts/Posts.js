import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
import Post from "../../../components/Post/Post";

class Posts extends Component {
  state = {
    posts: [],
    postSelected: null,
    error: false
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPost = posts.map(post => {
          return {
            ...post,
            author: "Fran"
          };
        });
        this.setState({ posts: updatedPost });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    //this.props.history.push({ pathname: "/" + id });
    this.props.history.push("/posts/" + id);
  };
  render() {
    let post = <p>Something went wrong!</p>;

    if (!this.state.error) {
      post = this.state.posts.map(post => {
        return (
          //<Link to={"/posts/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          //</Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{post}</section>
        <Route path="/posts/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Posts;
