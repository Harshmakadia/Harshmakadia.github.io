import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Faq from "./Faq";
import "./FaqSection.scss";

function FaqSection(props) {
  return (
    <>
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
          ></SectionHeader>
          <Faq
            items={[
              {
                question: "RPA 🎓",
                answer:
                  "Enjoy automating the repetitive tasks using Robotic Process Automation(RPA). I'm certified UiPath. Developer.",
              },
              {
                question: "Chatbots 🤖",
                answer:
                  "Love automating businesses leads and conversions through chatbots.",
              },
              {
                question: "Web Apps 💻",
                answer:
                  "Designing responsive web templates along with taking care of Building amazing, immersive user experiences.",
              },
              {
                question: "Tweet 🐦",
                answer:
                  "Tweeting about Technology, MachineLearning, IoT, ChatBots, BigData, AI, UX, UI, RPA and lot more!",
              },
              {
                question: "Blogging 📕",
                answer: "Writing tech articles on Medium about Javascript, React, chatbots",
              },
              {
                question: "MVP 🏆",
                answer: "Build MVP faster with nocode tools to evaluate your ideas. Spend less, Ship faster.",
              },
            ]}
          ></Faq>
        </Container>
      </Section>
      <Section
        bg={props.bg}
        textColor={props.textColor}
      >
        <Container>
          <h2 className={"FaqSection__no-classname custom-h1" + 
            (props.bg ? ` bg-${props.bg}` : "") +
            (props.textColor ? ` text-${props.textColor}` : "")
          }
          >Projects 🖌</h2>
        </Container>
      </Section>
    </>
  );
}

export default FaqSection;
