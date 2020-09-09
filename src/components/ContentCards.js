import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import ThemeContext from '../context';

function ContentCards(props) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <>
        <Row className="justify-content-center">
          {props.items.map((item, index) => (
            <Col xs={12} md={6} lg={4} className="py-3 cursor-pointer" key={index}>
              <Card className="animate" onClick={() => window.open(item.url, "_blank")}>
                <AspectRatio ratio={1 / 0.5}>
                  <Card.Img
                    src={item.image}
                    alt={item.title}
                    variant="top"
                  ></Card.Img>
                </AspectRatio>
                <Card.Body style={{backgroundColor: (context.theme === "dark" ? "#509BDB" : "#ffffff")}}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default ContentCards;
