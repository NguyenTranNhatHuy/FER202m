import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addChat } from './redux/Store'

function ChatRoom() {
    const chatroom = useSelector(state => state.chatroom)
    console.log(chatroom)
    const [text, setText] = useState('');
    const senderId = "user1";
    const timestamp = new Date();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/ChatRoom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: chatroom[chatroom.length - 1].id + 1, text, senderId, timestamp })
            });

            if (!response.ok) {
                throw new Error('Failed to add company');
            }

            const data = await response.json();
            dispatch(addChat(data));
            navigate('/chat');
        } catch (error) {
            console.error('Error task company:', error);
        }
    };
    return (
        <>

            <div className='container-fluid p-3'>
                {chatroom.map(chat => (

                    <div key={chat.id}>
                        <p><b>{chat.senderId}: </b>{chat.text}</p>
                        <p>{chat.timestamp}</p>
                    </div>
                ))}
            </div>
            <div className='container-fluid'>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setText(e.target.value)} className='w-50 rounded ' placeholder='Type a message' type='text' />
                    <button className='btn btn-primary m-5'>Send</button>
                </form>


            </div>
        </>
    )
}

ChatRoom.propTypes = {
    text: PropTypes.string.isRequired,
    senderId: PropTypes.number.isRequired,
}

export default ChatRoom