import { io } from "socket.io-client";
import { createAction } from "@reduxjs/toolkit";

const { REACT_APP_API_URL } = process.env;

export const socketNewMessage = createAction('socket/socketNewMessage');
export const socketUserOnline = createAction('socket/socketUserOnline');
export const socketUserOffline = createAction('socket/socketUserOffline');

let socket;
export const socketConnect = (token) => {
  return (dispatch) => {
    if (socket) {
      return;
    }
    socket = io(REACT_APP_API_URL, {
      extraHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    socket.on('new-message', (message) => {
      dispatch(socketNewMessage({
        message
      }))
    })
    socket.on('user-online', (userId) => {
      dispatch(socketUserOnline(userId))
    })
    socket.on('user-offline', (userId) => {
      dispatch(socketUserOffline(userId))
    })
    socket.on('connect', () => {
      console.log(socket)
    })
  }
}

export const socketDisconnect = () => {
  return () => {
    if (!socket) {
      return;
    }
    socket.disconnect();
    socket = null;
  }
}
