import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import UpdatePopup from './UpdatePopup';
import { removeTaskFromList } from '../slices/taskSlice';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedTask } from '../slices/taskSlice';

const TaskList = () => {

    const {taskList} = useSelector((state) => state.tasks)

    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    const updateTask = (task) => {
        setModalShow(true);
        dispatch(setSelectedTask(task));
    }

    const deleteTask = (task) => {
        console.log("Task Deleted")
        dispatch(removeTaskFromList(task))
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
                {
                   taskList && taskList.map((task, index) => {
                    return (
                        <tr key={task.id}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td className='gap-2'>
                            <Button variant="primary" className='mx-3' onClick={() => updateTask(task)}><i className="bi bi-pencil"></i></Button> 
                            <Button variant="primary" onClick={() => deleteTask(task)}><i className="bi bi-trash3"></i></Button>   
                            </td>
                        </tr>
                    )
                   })
                }
                
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