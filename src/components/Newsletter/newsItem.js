import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import ThemeContext from '../../context';

function NewsItem(props) {
  return (
      <ThemeContext.Consumer>
      {context => (
        <>
            <Row className="justify-content-center">
            {props.items.map((item, index) => (
                <Col xs={12} md={12} className="py-3 cursor-pointer" key={index}>
                <Card className="animate" onClick={() => window.open(item.url, "_blank")}>
                    <Card.Body className="p-4" style={{backgroundColor: (context.theme === "dark" ? "#7f7f7f" : "#ffffff")}}>
                    <Card.Text>{item.title}</Card.Text>
                    <Media className="align-items-center mt-auto">
                        <Media.Body className="ml-2">
                        <h6 className="font-weight-bold mb-0">{item.date}</h6>
                        </Media.Body>
                    </Media>
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

export default NewsItem;
