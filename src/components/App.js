import UserCreate from "./UserCreate";
import React from "react";
import { LangStore } from "../contexts/LangContext";
import ColorContext from "../contexts/ColorContext";
import LangSelector from "./LangSelector";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <LangStore>
          <LangSelector />
          <ColorContext.Provider value="green">
              <UserCreate />
          </ColorContext.Provider>
        </LangStore>
      </div>
    );
  }
}

export default App;
