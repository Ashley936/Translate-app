import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
ReactDOM.render(<App />, document.querySelector('#root'))

/* 

Context => Info out by:- Default Value  ||  Parent component[Provider]
                                through context obj
    => Info in Child by :- [ this.context  ||   Consumer]
create a context obj. with default value => create contextType => get the value in this.context

Everytime you use provider it creates a separate channel of info to separate components
*/