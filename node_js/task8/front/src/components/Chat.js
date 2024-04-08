import React, {useEffect, useMemo, useRef, useState} from 'react';
import {useSelector} from "react-redux";
import _ from 'lodash'

function Chat(props) {
    const messagesList = useSelector(state => state.messages.messagesList)
    const profile = useSelector(state => state.users.profile)
    const messagesListRevers = useMemo(() => _.reverse([...messagesList]), [messagesList]);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        chatContainerRef.current.addEventListener('DOMNodeInserted', event => {
            const { currentTarget: target } = event;
            target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
        });
    }, [messagesList]);

    return (
        <div className="chat" data-chat="person1" ref={chatContainerRef}>
            <div className="conversation-start">
                <span>Today, 6:48 AM</span>
            </div>
            {messagesListRevers.map((message) => (
                <React.Fragment key={message.id}>
                    {profile.id === message.from ? (
                        <div className="bubble me">
                            {message.text}
                        </div>
                    ) : (
                        <div className="bubble you">
                            {message.text}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Chat;
