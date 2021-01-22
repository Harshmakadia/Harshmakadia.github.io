import React from "react";
import HeroSection from "./../components/About/HeroSection";
import TeamBiosSection from "./../components/About/TeamBiosSection";
import CtaSection from "./../components/About/CtaSection";
import { useRouter } from "./../util/router.js";
import ThemeContext from '../context';

import {Helmet} from "react-helmet";

function IndexPage(props) {
  const router = useRouter();

  return (
    <ThemeContext.Consumer>
      {context => (
        <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>I'm Harsh | About</title>
          </Helmet>
          <HeroSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="About Me"
            subtitle="I'm Harsh having over 5+ years of experience in the software industry. Being a full-stack developer I have worked on a lot of frontend and backend technologies, Mobile apps using React native, Robotic Process Automation, defining software architecture"
            buttonText=""
            buttonColor="primary"
            buttonOnClick={() => {
              // Navigate to pricing page
              router.push("/pricing");
            }}
          ></HeroSection>
          <TeamBiosSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Follow me on"
            subtitle=""
          ></TeamBiosSection>
          <CtaSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Join the newsletter"
            subtitle="Subscribe to my weekly emails on Low-code/No code, ReactJS, Javascript, UX/UI, tools that makes your life easier."
            buttonText="Subscribe Now"
            buttonColor="primary"
            showArchieve={true}
            buttonOnClick={() => {
              window.open("https://tinyletter.com/HarshMakadia", "_blank");
            }}
          ></CtaSection>
          <CtaSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Book a slot"
            subtitle="Setup meeting to discuss about product development, nocode & low code development or anything else. I would be happy to work with you."
            buttonText="Book Appointment"
            buttonColor="primary"
            showArchieve={false}
            buttonOnClick={() => {
              window.open("/book-a-slot", "_self");
            }}
          ></CtaSection>
        </>
        )}
      </ThemeContext.Consumer>
  );
}

export default IndexPage;
