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
            subtitle="Dev, Dreamer, Travel Buff, Gadget Geek, Adventurer, Gamer. Writing about Javascript ❤"
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
            subtitle="Subscribe to my weekly emails on Low-code/No code, ReactJS, Javascript, UX/UI, tools that makes your life easier"
            buttonText="Subscribe Now"
            buttonColor="primary"
            buttonOnClick={() => {
              window.open("https://tinyletter.com/HarshMakadia", "_blank");
            }}
          ></CtaSection>
        </>
        )}
      </ThemeContext.Consumer>
  );
}

export default IndexPage;
