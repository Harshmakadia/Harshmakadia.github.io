import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Clients
          items={[
            {
              name: "Javscript",
              image:
                "https://user-images.githubusercontent.com/13532530/86578287-36e37800-bf99-11ea-9d33-3078a07d7376.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "React",
              image:
                "https://user-images.githubusercontent.com/13532530/86578294-3945d200-bf99-11ea-9241-0c819a5a9839.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "NodeJS",
              image:
                "https://user-images.githubusercontent.com/13532530/86578700-dc96e700-bf99-11ea-823d-b32680f96c7d.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "HTML",
              image:
                "https://user-images.githubusercontent.com/13532530/86578706-de60aa80-bf99-11ea-929f-99a0aae72508.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "CSS",
              image:
                "https://user-images.githubusercontent.com/13532530/87222375-c66d9a00-c390-11ea-9e04-e84fddccd02a.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "Python",
              image:
                "https://user-images.githubusercontent.com/13532530/86578709-df91d780-bf99-11ea-8132-f516acc0bb4d.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "Firebase",
              image:
                "https://user-images.githubusercontent.com/13532530/92553990-f39bd300-f281-11ea-921b-3ebb2301f1cf.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "GraphQL",
              image:
                "https://user-images.githubusercontent.com/13532530/92553996-f5fe2d00-f281-11ea-8433-ae78c5d8d6c4.png",
              width: "100px",
              height: "100px",
            },
            {
              name: "Nocode Tools",
              image:
                "https://user-images.githubusercontent.com/13532530/92554205-66a54980-f282-11ea-959a-0cf01750e92f.png",
              width: "140px",
              height: "120px;",
            },
            // {
            //   name: "Nextjs",
            //   image:
            //     "https://user-images.githubusercontent.com/13532530/92554130-3f4e7c80-f282-11ea-9ac6-19b1cd57394a.jpg",
            //   width: "140px",
            //   height: "120px;",
            // },
          ]}
        ></Clients>
      </Container>
    </Section>
  );
}

export default ClientsSection;
