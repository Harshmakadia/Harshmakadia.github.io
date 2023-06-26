import React from "react";
import HeroSection from "./../../components/About/HeroSection";
import ThemeContext from '../../context';

function Book(props) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <>
          <HeroSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Book Appointment"
            subtitle=""
          ></HeroSection>
          
        </>
        )}
      </ThemeContext.Consumer>
  );
}

export default Book;
