import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCompany, updateTask } from './redux/Store';
import { toast } from 'react-toastify';

function UpdateTask() {
    const { id } = useParams();
    const tasks = useSelector(state => state.tasks);
    const existingTask = tasks.filter(task => task.id == id);
    const { name, category } = existingTask[0];
    const [uname, setName] = useState(name);
    const [ucategory, setCategory] = useState(category);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const handleUpdate = async (event) => {
        event.preventDefault();
        dispatch(updateTask({
            id: id,
            name: uname,
            category: ucategory
        }))
        navigate("/home")
        toast.success("Updated Task Successfully!");
    };


    return (
        <div className='d-flex justify-content-center align-items-center vh-100 w-100'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update Task</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter Name' value={uname} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor='category'>Category</label>
                        <input type='text' name='category' className='form-control' placeholder='Enter Category' value={ucategory} onChange={e => setCategory(e.target.value)}></input>
                    </div>
                    <button className='btn btn-info mt-5'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateTask;
