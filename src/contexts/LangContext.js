import React from "react"

const LangContext = React.createContext("Default value")

export class LangStore extends React.Component{
    state = { language: "English" }
    setLanguage = (lang) => {
        this.setState({language:lang});
    }
    render() {
        return (
            <LangContext.Provider value={{...this.state, setLanguage: this.setLanguage}}>
                {this.props.children}
            </LangContext.Provider>
        )
    }
}

export default LangContext;