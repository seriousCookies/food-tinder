import React, { useState } from "react";
import { Button, Modal, Card, Text } from "react-bootstrap";

const Recipe = ({ recipeData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (recipeData !== null) {
    const {
      title,
      reqadyinMinutes,
      servings,
      image,
      summary,
      instructions,
      ingredients,
    } = recipeData.result;
    console.log("here", instructions, ingredients);
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>hey</Card.Text>
            <Card.Text>now</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Show Recipe
            </Button>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{instructions}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Recipe
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  return <text>Nothing</text>;
};

export default Recipe;
