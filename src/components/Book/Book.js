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
          <div className="calendly-inline-widget" data-url="https://calendly.com/harsh-makadia/30min" style={{minWidth:"320px",height:"630px", minHeight: "75%", backgroundColor: context.theme === "dark" ? "#0E182A" : "#ffffff"}}></div>
        </>
        )}
      </ThemeContext.Consumer>
  );
}

export default Book;
