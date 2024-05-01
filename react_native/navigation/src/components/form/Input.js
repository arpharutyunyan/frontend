import React from 'react';
import {Text, TextInput} from "react-native";

function Input(props) {
  const { wrapperClassName, error, ...p } = props
  return (
      <TextInput>
          {error ? (
              <Text>{error}</Text>
          ) : null}
      </TextInput>
  );
}

export default Input;
