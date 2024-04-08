import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { socketConnect, socketDiconnect, socketDisconnect, socketInit } from "../store/actions/socket";
import { messagesListRequest } from "../store/actions/messages";
import { profileRequest } from "../store/actions/users";

function Wrapper(props) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.users.token);
  useEffect(() => {
    if (token) {
      dispatch(socketConnect(token));
      dispatch(profileRequest())
    } else {
      dispatch(socketDisconnect())
    }
  }, [token]);
  if (!token) {
    return <Navigate to="/login" replace/>
  }
  return (
    <>
      {props.children}
    </>
  );
}

export default Wrapper;
