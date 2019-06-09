import React, { Component } from "react";
import "./FullPost.css";
import axios from "axios";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  /* componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get(`/posts/${this.props.id}`).then(response => {
          //console.log(response);
          this.setState({
            loadedPost: response.data
          });
        });
      }
    }
  } */
  /*
  componentDidMount() {
    console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      axios.get(`/posts/${this.props.match.params.id}`).then(response =>
        this.setState({
          loadedPost: response.data
        })
      );
    }
  }*/
  componentDidMount() {
    console.log("el did moun");
    this.loadPost();
  }
  componentDidUpdate() {
    this.loadPost();
  }
  loadPost() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        //console.log("entro");
        axios.get(`/posts/${this.props.match.params.id}`).then(response => {
          //console.log("hizo el ajax");
          this.setState({
            loadedPost: response.data
          });
        });
      }
    }
  }
  deletePostHandler = () => {
    axios
      .delete(`/posts/${this.props.match.params.id}`)
      .then(response => console.log(response));
  };
  render() {
    let post = <p style={{ textAlign: "center" }}>Loading...</p>;
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
