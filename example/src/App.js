import React, { Component } from "react";

import ExampleComponent from "typescript-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent color="red" size="100px" />
      </div>
    );
  }
}
