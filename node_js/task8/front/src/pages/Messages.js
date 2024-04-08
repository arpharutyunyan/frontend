import React, { useEffect } from 'react';
import Wrapper from "../components/Wrapper";
import UsersList from "../components/UsersList";
import Chat from "../components/Chat";
import ChatForm from "../components/ChatForm";
import { useParams } from "react-router-dom";
import { messagesListRequest } from "../store/actions/messages";
import {useDispatch, useSelector} from "react-redux";
import {singleUserRequest} from "../store/actions/users";

function Messages(props) {
  const { friendId } = useParams();
  const dispatch = useDispatch();
  const friend = useSelector(state => state.users.friend);

  useEffect(() => {
    if (friendId) {
      dispatch(messagesListRequest({ friendId }))
      dispatch(singleUserRequest({ friendId }))
    }
  }, [friendId]);

  return (
    <Wrapper>
      <div className="wrapper">
        <div className="container">
          <div className="left">
            <UsersList/>
          </div>
          <div className="right">
            <div className="top"><span>To: <span className="name">{friend.firstName} {friend.lastName}</span></span></div>
            <Chat/>
            <ChatForm/>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Messages;
