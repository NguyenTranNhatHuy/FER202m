import { configureStore, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask(state, action) {
            state.push(action.payload);
        },
        removeTask(state, action) {
            toast.success("Deleted Task Successfully!")
            return state.filter(task => task.id !== action.payload);
        },
        setTasks(state, action) {
            return action.payload;
        },
        updateTask: (state, action) => {
            const { id, name, category } = action.payload;
            const cu = state.find(task => task.id == id);
            if (cu) {
                cu.name = name;
                cu.category = category
            }
        }

    }
});



export const fetchTasks = async () => {
    try {
        const response = await fetch('http://localhost:3001/tasks');
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        return [];
    }
};


export const { addTask, removeTask, setTasks, updateTask } = tasksSlice.actions;

const store = configureStore({
    reducer: {
        tasks: tasksSlice.reducer,
    }
});

const initializeStore = async () => {
    try {
        const tasksData = await fetchTasks();
        store.dispatch(setTasks(tasksData));
    } catch (error) {
        console.error('Error initializing store:', error);
    }
};

initializeStore();


export default store;
