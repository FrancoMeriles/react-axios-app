import React, { Component } from "react";

const assyncComponent = importComponent => {
  return class extends Component {
    render() {}
  };
};

export default assyncComponent;
