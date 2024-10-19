import { configureStore, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const companiesSlice = createSlice({
    name: 'companies',
    initialState: [],
    reducers: {
        addCompany(state, action) {
            state.push(action.payload);
        },
        removeCompany(state, action) {
            toast.success("Deleted Company Successfully!")
            return state.filter(company => company.id !== action.payload);
        },
        setCompanies(state, action) {
            return action.payload;
        },
        updateCompany: (state, action) => {
            const { id, name, category } = action.payload;
            const cu = state.find(company => company.id == id);
            if (cu) {
                cu.name = name;
                cu.category = category
            }
        }

    }
});



export const fetchCompanies = async () => {
    try {
        const response = await fetch('http://localhost:3001/companies');
        if (!response.ok) {
            throw new Error('Failed to fetch companies');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        return [];
    }
};


export const { addCompany, removeCompany, setCompanies, updateCompany } = companiesSlice.actions;

const store = configureStore({
    reducer: {
        companies: companiesSlice.reducer,
    }
});

const initializeStore = async () => {
    try {
        const companiesData = await fetchCompanies();
        store.dispatch(setCompanies(companiesData));
    } catch (error) {
        console.error('Error initializing store:', error);
    }
};

initializeStore();


export default store;
