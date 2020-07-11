import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
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
        ></SectionHeader>
        <Features
          items={[
            {
              title: "RPA 🎓",
              description:
                "Enjoy automating the repetitive tasks using Robotic Process Automation(RPA). I'm certified UiPath. Developer",
              image:
                "https://user-images.githubusercontent.com/13532530/86527272-fa414f00-beba-11ea-8e55-0d56cc38702f.png",
            },
            {
              title: "Chatbots",
              description:
                "Love automating businesses leads and conversions through chatbots. 🤖",
              image:
                "https://user-images.githubusercontent.com/13532530/86527340-aa16bc80-bebb-11ea-99c3-3a04d2435f1d.png",
            },
            {
              title: "Web Apps",
              description:
                "Designing responsive web templates along with taking care of Building amazing, immersive user experiences",
              image:
                "https://user-images.githubusercontent.com/13532530/86527399-10034400-bebc-11ea-9c27-2ea582594738.png",
            },
            {
              title: "Social Media",
              description:
                "Tweeting about Technology, MachineLearning, IoT, ChatBots, BigData, AI, UX, UI, RPA and lot more!",
              image:
                "https://user-images.githubusercontent.com/13532530/86527426-3628e400-bebc-11ea-96da-01e3b3732b31.png",
            },
          ]}
        ></Features>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
