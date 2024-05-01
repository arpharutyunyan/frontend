import React, {useEffect} from 'react';
import { useSelector } from "react-redux";
import {useNavigation} from "@react-navigation/native";

function WrapperLogOut(props) {
  const token = useSelector(state => state.users.token);
  const navigate = useNavigation();

  useEffect(() => {
    if (token) {
      navigate.replace('Home');
    }
  }, [token, navigate]);

  return (
    <>
      {props.children}
    </>
  );
}

export default WrapperLogOut;
