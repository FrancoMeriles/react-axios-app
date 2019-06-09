import React, { Component } from "react";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink
                  activeClassName="my-active"
                  activeStyle={{ color: "red" }}
                  to="/posts/"
                  exact
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}
          <Route path="/posts/" component={Posts} />
          <Route render={() => <div>Not Found</div>} />
          {/* <Redirect from="/" to="/posts" /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
