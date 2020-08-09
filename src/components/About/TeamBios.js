import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";
import ThemeContext from '../../context';

function TeamBios(props) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <>
          <Row className="justify-content-center">
            {props.items.map((item, index) => (
              <Col
                xs={12}
                md={4}
                lg={3}
                className="py-3 d-flex align-items-stretch text-center"
                key={index}
              >
                <Card className="d-flex flex-grow-1 flex-column text-center align-items-center border-0 animate" style={{backgroundColor: (context.theme === "dark" ? "rgb(140 94 60)" : "#dcdcdc")}}>
                  <Card.Body className="p-2" style={{cursor: "pointer"}} onClick={() => window.open(item.link, "_blank")}>
                    <Avatar src={item.avatar} alt={item.name} size="128px"></Avatar>
                    <div className="mt-4">
                      <h6 className="font-weight-bold mb-0">{item.name}</h6>
                      <small>{item.role}</small>
                    </div>
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

export default TeamBios;
