import React from "react";
import HeroSection from "./../components/Home/HeroSection";
import FaqSection from "./../components/FaqSection";
import HeroSection2 from "./../components/HeroSection2";
import HeroSection3 from "./../components/HeroSection3";
import ClientsSection from "./../components/ClientsSection";
import ContactSection from "./../components/ContactSection";
import ThemeContext from '../context';

import Harsh from "../images/stand.svg";

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
            title="Blazing Fast Website"
            subtitle="Migrating Medium blogs to Personal website with pagespeed score of 100"
            buttonText="View Project"
            buttonColor="primary"
            image="https://user-images.githubusercontent.com/13532530/105021258-58580d00-5a6e-11eb-9a74-b6f37b9171ef.png"
            buttonOnClick={() => {
              // Navigate to pricing page
              //router.push('/pricing');
              window.open(
                "http://blogs.harshmakadia.me/",
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
            title="console.beautify"
            subtitle="Beautify console logs. Why keep the default console.logs?"
            buttonText="View Project"
            buttonColor="primary"
            image="https://user-images.githubusercontent.com/13532530/86932123-90dd6c80-c156-11ea-844b-fe50d214725d.png"
            buttonOnClick={() => {
              // Navigate to pricing page
              window.open("https://www.npmjs.com/package/console.beautify", "_blank");
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
