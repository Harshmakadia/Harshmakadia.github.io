import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import NewsItem from "./newsItem";

function NewsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <NewsItem
          items={[
          {
              title: "Tech that Matters - Resources that will help you save time",
              date: "March 20th, 2021",
              url: 'https://tinyletter.com/HarshMakadia/letters/march-20-tech-that-matters-1'
            },
            {
              title: "Tech that Matters - Build website faster with nocode tools, profile picture maker",
              date: "January 23rd, 2021",
              url: 'https://tinyletter.com/HarshMakadia/letters/january-23-tech-that-matters'
            },
            {
              title: "Tech that Matters - Build website faster with help to these tools",
              date: "September 19th, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/september-19-tech-that-matters'
            },
            {
              title: "Tech that Matters - Get info about nocode tools to build your website in minutes along with automation workflow",
              date: "August 29th, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/august-29-tech-that-matters'
            },
            {
              title: "Tech that Matters - Get info about nocode tools to build your website in minutes",
              date: "August 22nd, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/august-22-tech-that-matters'
            },
            {
              title: "Tech that Matters - Nocode tools, React codebase generator, Notion websites",
              date: "August 15th, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/august-15-tech-that-matters'
            },
            {
              title: "Tech that Matters - Articles on React Props Drilling, Hooks, Patterns",
              date: "August 8th, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/august-8-tech-that-matters'
            }
          ]}
        />
      </Container>
    </Section>
  );
}

export default NewsSection;
