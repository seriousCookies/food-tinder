import React, { useState } from "react";
import { Button, Modal, Card, Row } from "react-bootstrap";
import Ingredients from "./ModalComponent/Ingredients";
import Instructions from "./ModalComponent/Instructions";

const Recipe = ({ recipeData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (recipeData !== null) {
    const {
      title,
      readyInMinutes,
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
            <Row>
              {" "}
              <Card.Text>Servings: {servings} </Card.Text>
            </Row>
            <Row>
              <Card.Text> Preparation time: {readyInMinutes} mins</Card.Text>
            </Row>
            <Row>
              <Button variant="primary" onClick={handleShow}>
                Show Recipe
              </Button>
            </Row>
          </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Ingredients ingredients={ingredients} />
            <Instructions instructions={instructions} />
          </Modal.Body>
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
