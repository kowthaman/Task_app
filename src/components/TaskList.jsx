import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdatePopup from './UpdatePopup';

const TaskList = () => {

    const [modalShow, setModalShow] = useState(false);

    const updateTask = () => {
        setModalShow(true)
    }

    const deleteTask = () => {
        console.log("Task Deleted")
    }


  return (
    <section className='my-4'>
        <Table striped bordered hover>
            <thead>
                <tr className='text-center'>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody className='text-center'>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td className='gap-2'>
                <Button variant="primary" className='mx-3' onClick={() => updateTask()}><i className="bi bi-pencil"></i></Button> 
                <Button variant="primary" onClick={() => deleteTask()}><i className="bi bi-trash3"></i></Button>   
                </td>
                </tr>
            </tbody>
        </Table>
        <UpdatePopup 
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
    </section>
  )
}

export default TaskList