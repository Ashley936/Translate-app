// Using contextType approach (this.context)

import React from "react";
import LangContext from "../contexts/LangContext";

class Field extends React.Component {
  static contextType = LangContext; //static means does not change on re-render
  render() {
    return (
      <div className="field">
        <label>{this.context.language==="English"? "Name": "Naam likho yha"}</label>
        <input />
      </div>
    );
  }
}

export default Field;