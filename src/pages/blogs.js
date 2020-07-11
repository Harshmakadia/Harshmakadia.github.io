import React from "react";
import HeroSection from "./../components/HeroSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import { useRouter } from "./../util/router.js";

function BlogsPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
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
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      ></ContentCardsSection>
    </>
  );
}

export default BlogsPage;
