import React, { Component } from "react";
import { Context } from "./Context";

export default class ContextTypePage extends Component {
  static contextType = Context;
  render() {
    const { themeColor } = this.context;
    console.log(this.context);
    return (
      <div>
        <h3> {themeColor} </h3>
      </div>
    );
  }
}
