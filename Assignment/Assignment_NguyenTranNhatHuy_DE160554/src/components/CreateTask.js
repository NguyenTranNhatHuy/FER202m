import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, addTask } from './redux/Store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function CreateTask() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: tasks[tasks.length - 1].id + 1, name, category })
            });

            if (!response.ok) {
                throw new Error('Failed to add company');
            }

            const data = await response.json();
            dispatch(addTask(data));
            navigate('/home');
            toast.success("Add task successfully!");
        } catch (error) {
            console.error('Error task company:', error);
        }
    };
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add Task</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter Name' onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='name'>Category</label>
                        <input type='text' name='category' className='form-control' placeholder='Enter Category' onChange={e => setCategory(e.target.value)}></input>
                    </div>
                    <button className='btn btn-info mt-5'>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default CreateTask