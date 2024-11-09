import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const UpdatePopup = (props) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const updateTask = (e) => {
        props.onHide();
    }


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicTask">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Enter Task" value={title} onChange={e => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Text Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Task Description" value={description} onChange={e => setDescription(e.target.value)}/>
            </Form.Group>
            
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={(e) => updateTask(e)}>
            Update Task
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default UpdatePopup