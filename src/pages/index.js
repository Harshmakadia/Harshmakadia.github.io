import React from "react";
import HeroSection from "./../components/HeroSection";
import FaqSection from "./../components/FaqSection";
import HeroSection2 from "./../components/HeroSection2";
import HeroSection3 from "./../components/HeroSection3";
import ClientsSection from "./../components/ClientsSection";
import ContactSection from "./../components/ContactSection";
import ThemeContext from '../context';

import Harsh from "../images/harsh-img.png";

function IndexPage(props) {
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
            title="Hello, I'm Harsh Makadia 👋🏻"
            subtitle="ChatBots 💬 &nbsp;|&nbsp; Web Apps 🖥 &nbsp; |&nbsp; Javascript ❤️ &nbsp;|&nbsp; ReactJS 🤩 &nbsp;|&nbsp; RPA 🤖&nbsp; "
            image={Harsh}
          ></HeroSection>
          <FaqSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Things I do 💻"
            subtitle=""
          ></FaqSection>
          <HeroSection2
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Bitsy.ml"
            subtitle="Create short link for multiple links in seconds."
            buttonText="View Project"
            buttonColor="primary"
            image="https://bitsy-cc3f6.web.app/static/media/task.f745f59c.png"
            buttonOnClick={() => {
              // Navigate to pricing page
              window.open("https://bitsy-cc3f6.web.app/", "_blank");
            }}
          ></HeroSection2>
          <HeroSection3
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="console.beautify"
            subtitle="Beautify console logs. Why keep the default console.logs?"
            buttonText="View Project"
            buttonColor="primary"
            image="https://user-images.githubusercontent.com/13532530/86932123-90dd6c80-c156-11ea-844b-fe50d214725d.png"
            buttonOnClick={() => {
              // Navigate to pricing page
              //router.push('/pricing');
              window.open(
                "https://www.npmjs.com/package/console.beautify",
                "_blank"
              );
            }}
          ></HeroSection3>
          <HeroSection2
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="React Context vs Redux"
            subtitle="How React Context can come to the rescue if you don’t know Redux."
            buttonText="View Project"
            buttonColor="primary"
            image="https://user-images.githubusercontent.com/13532530/86934057-e0bd3300-c158-11ea-8579-50d9b9503273.png"
            buttonOnClick={() => {
              // Navigate to pricing page
              window.open("https://react-context.netlify.app/", "_blank");
            }}
          ></HeroSection2>
          <ClientsSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Skills 🚀"
            subtitle=""
          ></ClientsSection>
          <ContactSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Contact Me"
            subtitle=""
            buttonText="Send message"
            buttonColor="primary"
            showNameField={true}
            inputSize="md"
          ></ContactSection>
        </>
      )}
      </ThemeContext.Consumer>
  );
}

export default IndexPage;
