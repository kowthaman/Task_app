import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTaskToList } from '../slices/taskSlice';
import { useDispatch } from 'react-redux';

const AddTask = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        dispatch(addTaskToList({title,description}));
        setTitle("")
        setDescription("")
    }

  return (
    <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicTask">
            <Form.Label>Task</Form.Label>
            <Form.Control type="text" placeholder="Enter Task" value={title} onChange={e => setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Text Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Task Description" value={description} onChange={e => setDescription(e.target.value)}/>
        </Form.Group>
        <div className='text-end'>
            <Button variant="primary" type="submit" onClick={(e) => addTask(e)}>
                Add Task
            </Button>
        </div>
        </Form>
    </>
  )
}

export default AddTask