import React from "react";
import Section from "../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={12} md={12} sm={12} className="text-center header-center">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
              spaced={true}
            ></SectionHeader>
          </Col>
          <Col className="offset-lg-1 mt-5 mt-lg-0" style={{textAlign: "center"}}>
            <figure className="HeroSection2__image-container mx-auto">
              {/* <Image src={props.image} fluid={true} style={{maxHeight: 500, minHeight: 500}}></Image> */}
            </figure>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default HeroSection;
