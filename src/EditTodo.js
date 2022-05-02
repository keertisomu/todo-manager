import React, { useState } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, closeButton } from "react-bootstrap";

export default function EditTodo({ show, handleClose = (f) => f() }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <button class="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button class="btn btn-primary" onClick={handleClose}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
}
