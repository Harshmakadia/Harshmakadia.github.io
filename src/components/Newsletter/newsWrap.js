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
              title: "Tech that Matters - Articles on React Props Drilling, Hooks, Patterns",
              date: "August 8th, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/august-8-tech-that-matters'
            },
            {
              title: "Tech that Matters - Nocode tools, React codebase generator, Notion websites",
              date: "August 17th, 2020",
              url: 'https://tinyletter.com/HarshMakadia/letters/august-17th-tech-that-matters'
            }
          ]}
        />
      </Container>
    </Section>
  );
}

export default NewsSection;
