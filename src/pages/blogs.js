import React from "react";
import HeroSection from "./../components/HeroSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import { useRouter } from "./../util/router.js";
import ThemeContext from '../context';

import {Helmet} from "react-helmet";

function BlogsPage(props) {
  const router = useRouter();

  return (
    <ThemeContext.Consumer>
      {context => (
        <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>I'm Harsh | Blogs</title>
          </Helmet>
          <HeroSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="About Me"
            subtitle="Dev, Dreamer, Travel Buff, Gadget Geek, Adventurer, Gamer. Writing about Javascript ❤"
            buttonColor="primary"
            buttonOnClick={() => {
              // Navigate to pricing page
              router.push("/pricing");
            }}
          ></HeroSection>
          <ContentCardsSection
            bg={context.theme === "dark" ? "dark" : "white"}
            textColor={context.theme === "dark" ? "light" : "dark"}
            size="md"
            bgImage=""
            bgImageOpacity={1}
            title="Featured Content"
            subtitle=""
          ></ContentCardsSection>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default BlogsPage;
