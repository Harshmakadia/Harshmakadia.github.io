import React from "react";
import ThemeContext from '../context';

function NotFoundPage(props) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <>
          <div style={{ padding: "50px", width: "100%", textAlign: "center", backgroundColor: (context.theme === "dark" ? "#333B3F" : "#ffffff") }}>
            The page <code>{props.location.pathname}</code> could not be found.
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default NotFoundPage;
