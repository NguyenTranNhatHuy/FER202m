import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCompany, removeCompany, removeTask } from './redux/Store';
import { Link } from 'react-router-dom';

function TaskList() {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch();
    console.log(tasks);
    return (
        <div>

            <h1>Tasks</h1>
            <Link to={'/create'}>
                <button className='btn btn-success m-3'>Create</button>
            </Link >

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">cateogy</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr>

                            <th scope="row">{task.id}</th>
                            <td>{task.name}</td>
                            <td>{task.category}</td>
                            <td>
                                <button onClick={() => dispatch(removeTask(task.id))} type="button" class="btn btn-danger m-2">Delete</button>
                                <Link to={`/update/${task.id}`}>
                                    <button className='btn btn-primary'>Update</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div >
    )
}

export default TaskList;