import React, { Component } from "react";
import SwaggerUI from "swagger-ui";
import "./App.css";
import "../node_modules/swagger-ui/dist/swagger-ui.css";

// There are two ways to pull in the swagger definition file. If the .json file
// is located in this project, simply import it and assign the `spec` property.
// If it is hosted elsewhere, assign the url property instead.
import petStoreSwagger from "./petstore-swagger.json";

class App extends Component {
  componentDidMount() {
    // Configuration options documented at:
    // https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md
    SwaggerUI({
      dom_id: "#ui",
      spec: petStoreSwagger
      // url: "http://petstore.swagger.io/v2/swagger.json"
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="/swagger-logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">My API Documentation</h1>
        </header>
        <div id="ui" />
      </div>
    );
  }
}

export default App;
