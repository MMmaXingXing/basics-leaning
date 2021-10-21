import React, { Component } from "react";
import { Context } from "./Context";
import ContextTypePage from "./ContextTypePage";

export default class ContextPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: {
        themeColor: "red"
      }
    };
  }

  render() {
    const { theme, user } = this.state;
    return (
      <div>
        <h3>ContextPage</h3>
        <Context.Provider value={theme}>
          <ContextTypePage />
        </Context.Provider>
      </div>
    );
  }
}

// 如何使用context
// step1: 创建一个contex对象
// step2: 创建一个provider
// step3: 子组件消费value 三种途径：contxtType
