import { configureStore, createSlice } from '@reduxjs/toolkit';

const chatRoomSlice = createSlice({
    name: 'chatroom',
    initialState: [],
    reducers: {
        setChatRoom(state, action) {
            return action.payload;
        },
        addChat(state, action) {
            state.push(action.payload);
        },
    }
});

export const fetchChat = async () => {
    try {
        const response = await fetch('http://localhost:3001/ChatRoom');
        if (!response.ok) {
            throw new Error('Failed to fetch chatroom');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching chatroom:', error);
        return [];
    }
};

export const { addChat,setChatRoom } = chatRoomSlice.actions;

const store = configureStore({
    reducer: {
        chatroom: chatRoomSlice.reducer,
    }
});

const initializeStore = async () => {
    try {
        const chatsData = await fetchChat();
        store.dispatch(setChatRoom(chatsData));
    } catch (error) {
        console.error('Error initializing store:', error);
    }
};

initializeStore();

export default store;
