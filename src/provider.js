import React, { Component } from 'react';

import ThemeContext from './context';

class GlobalState extends Component {
  state = {
    theme: "light"
  };

  componentDidMount() {
    const currentTheme = localStorage.getItem("theme") || "light";
    localStorage.setItem("theme", currentTheme); 
    this.setState({
      theme: currentTheme
    });
  };
  

  toggleTheme = theme => {
    const currentMode = this.state.theme;
    const nextMode = currentMode === "dark" ? "light" : "dark"; 
    localStorage.setItem("theme", nextMode); 
    this.setState({theme: nextMode });

  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default GlobalState;