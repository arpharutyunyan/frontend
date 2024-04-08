import React from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function WrapperLogOut(props) {
  const token = useSelector(state => state.users.token);
  if (token) {
    return <Navigate to="/" replace/>
  }
  return (
    <>
      {props.children}
    </>
  );
}

export default WrapperLogOut;
