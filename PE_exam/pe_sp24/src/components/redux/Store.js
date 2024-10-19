import { configureStore, createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: 'videos',
    initialState: [],
    reducers: {
        setVideo(state, action) {
            return action.payload;
        }
    }
});

export const fetchVideos = async () => {
    try {
        const response = await fetch('http://localhost:3001/videos');
        if (!response.ok) {
            throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching videos:', error);
        return [];
    }
};

export const { setVideo } = videoSlice.actions;

const store = configureStore({
    reducer: {
        videos: videoSlice.reducer,
    }
});

const initializeStore = async () => {
    try {
        const videosData = await fetchVideos();
        store.dispatch(setVideo(videosData));
    } catch (error) {
        console.error('Error initializing store:', error);
    }
};

initializeStore();

export default store;
