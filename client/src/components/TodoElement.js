import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const TodoElement = (props) => {
  return (
    /* <li style={{ textDecoration: props.todo.done ? "line-through" : "none" }}>
      {props.todo.item} |{" "}
      <button onClick={() => props.toggle(props.todo.id)}>done</button>
    </li>
           */
    <Container className="mt-2">
      <Row xs="auto">
        <Col lg>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              {props.todo.item}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Button
            className="mx-auto"
            variant="success"
            onClick={props.toggle(props.todo.id)}
            id="button-addon2"
          >
            Edit
          </Button>
        </Col>
        <Col>
          <Button
            className="mx-auto"
            variant="warning"
            onClick={props.toggle(props.todo.id)}
            id="button-addon2"
          >
            Update
          </Button>
        </Col>
        <Col>
          <Button
            className="mx-auto"
            variant="danger"
            onClick={props.toggle(props.todo.id)}
            id="button-addon2"
          >
            Delete
          </Button>
        </Col>
      </Row>
    </Container>

    /* end */
  );
};

export default TodoElement;
