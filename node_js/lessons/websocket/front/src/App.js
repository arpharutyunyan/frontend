import React, {useCallback, useEffect, useState} from 'react';
import io from 'socket.io-client';
import moment from "momnet";

const {REACT_APP_API_URL} = process.env;

const users = [
    {id: 1, name: "Tigran"},
    {id: 2, name: "Arpine"},
    {id: 3, name: "Arame"},
    {id: 4, name: "Edgar"},
    {id: 5, name: "Karapet"},
]

let socket

function App(props) {
    const [userId, setUserId] = useState('');
    const [friendId, setFriendId] = useState('');
    const [messages, setMessage] = useState([]);
    const [text, setText] = useState('');
    useEffect(() => {
        if (socket) {
            socket.disconnect();
        }
        if (!userId) {
            return;
        }
        socket = io(REACT_APP_API_URL, {
            extraHeaders: {
                Authorization: userId
            }
        });
        socket.on('connect', () => {
            console.log('connected...')
        })
        socket.on('new-message', (data) => {
            setMessage(list => {
                return [...list, data];
            })
        })
    }, [userId]);

    const handleSendMessage = useCallback((ev) => {
        ev.preventDefault();
        socket.emit('send-message', {
            text, friendId
        })
        setText('');
    }, [text, friendId])
    return (
        <div>
            <form onSubmit={handleSendMessage}>
                <select value={userId} onChange={(ev) => setUserId(ev.target.value)}>
                    <option value=""></option>
                    {users.map(user => (
                        <option value={user.id}>{user.name}</option>
                    ))}
                </select>
                to
                <select value={friendId} onChange={(ev) => setFriendId(ev.target.value)}>
                    <option value=""></option>
                    {users.map(user => (
                        <option value={user.id}>{user.name}</option>
                    ))}
                </select>
                <br/>
                <textarea
                    value={text}
                    onChange={(ev) => setText(ev.target.value)}
                    placeholder="Message"
                />
                <br/>
                <button disabled={!text || !userId || !friendId}>Send</button>
            </form>
            <div>
                <ul>
                    {messages.map((message) => (
                        <li key={message.id}>
                            <strong>{users.find(d => +d.id === +message.friendId)?.name}: </strong>
                            <span>{message.text} ({moment(message.createdAt).calendar()})</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
