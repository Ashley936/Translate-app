import React from "react";
import LangContext from "../contexts/LangContext";
// using this.context
class LangSelector extends React.Component {
    static contextType = LangContext;
    render() {
    return (
      <div className="ui segment">
        <h2>Chose Language</h2>
        <button
          className="ui inverted blue button"
          onClick={() => this.context.setLanguage("English")}
        >
          <i className="flag us" />
        </button>
        <button
          className="ui inverted violet button"
          onClick={() => this.context.setLanguage("Hindi")}
        >
          <i className="flag in" />
        </button>
      </div>
    );
  }
}

export default LangSelector;