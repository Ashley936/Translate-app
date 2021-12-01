// Using Consumer
//used when we want info from multiple contexts in one component
// each context.Consumer can only hv a function as its child
// All the values inside the pipes are dumped in the value property
import React from "react";
import LangContext from "../contexts/LangContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderBtn(values) {
    const className = `ui inverted ${values} button`
    return (
      <button className={className}>
        <LangContext.Consumer>
          {({language}) => (language === "English" ? "Submit" : "Jma kriye")}
        </LangContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(value) => this.renderBtn(value)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
