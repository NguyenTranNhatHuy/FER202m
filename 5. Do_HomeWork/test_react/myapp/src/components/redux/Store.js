import { configureStore, createSlice } from '@reduxjs/toolkit';

const companiesSlice = createSlice({
    name: 'companies',
    initialState: [],
    reducers: {
        addCompany(state, action) {
            state.push(action.payload);
        },
        removeCompany(state, action) {
            return state.filter(company => company.id !== action.payload);
        },
        setCompanies(state, action) {
            return action.payload;
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
        return data; // Trả về dữ liệu từ API
    } catch (error) {
        console.error('Error fetching companies:', error);
        return []; // Trả về mảng rỗng nếu có lỗi
    }
};
export const deleteCompany = companyId => async dispatch => {
    try {
        await fetch(`http://localhost:3001/companies/${companyId}`, {
            method: 'DELETE'
        });
        dispatch(removeCompany(companyId));
    } catch (error) {
        console.error('Error deleting company:', error);
    }
};

export const { addCompany, removeCompany, setCompanies } = companiesSlice.actions;

const store = configureStore({
    reducer: {
        companies: companiesSlice.reducer,
    }
});

(async () => {
    const companiesData = await fetchCompanies();
    store.dispatch(setCompanies(companiesData));
})();

export default store;
