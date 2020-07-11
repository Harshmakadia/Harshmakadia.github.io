import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";

function ContentCards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={4} className="py-3 cursor-pointer" key={index}>
          <Card onClick={() => window.open(item.url, "_blank")}>
            <AspectRatio ratio={1 / 0.5}>
              <Card.Img
                src={item.image}
                alt={item.title}
                variant="top"
              ></Card.Img>
            </AspectRatio>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ContentCards;
