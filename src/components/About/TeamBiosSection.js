import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import TeamBios from "./TeamBios";

function TeamBiosSection(props) {
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
        <TeamBios
          items={[
            {
              avatar:
                "https://user-images.githubusercontent.com/13532530/89712602-988b6d80-d9af-11ea-96f2-835ad9f2f326.png",
              name: "@MakadiaHarsh",
              role: "Medium",
              link: "https://medium.com/@MakadiaHarsh"
            },
            {
              avatar:
                "https://user-images.githubusercontent.com/13532530/89712635-c375c180-d9af-11ea-8f13-3a4e9730fbf2.png",
              name: "@MakadiaHarsh",
              role: "Twitter",
              link: "https://twitter.com/MakadiaHarsh"
            },
            {
              avatar:
                "https://user-images.githubusercontent.com/13532530/89712654-dee0cc80-d9af-11ea-888d-fd5aac2b33d8.png",
              name: "Harshmakadia",
              role: "Github",
              link: "https://github.com/Harshmakadia"
            },
            {
              avatar:
                "https://user-images.githubusercontent.com/13532530/89712676-fd46c800-d9af-11ea-9f29-a2a53c5c5bc5.png",
              name: "Harsh Makadia",
              role: "LinkedIn",
              link: "https://www.linkedin.com/in/harsh-makadia-03109b66/"
            },
          ]}
        ></TeamBios>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;