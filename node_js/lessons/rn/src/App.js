import React, { useEffect, useRef, useState } from "react";
import img from "./assets/images/istockphoto-1146517111-612x612.jpg";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  Button,
  TouchableOpacity,
  TouchableHighlight, TouchableWithoutFeedback, Pressable,
} from "react-native";
import FastImage from "react-native-fast-image";

function App(props) {
  const [text, setText] = useState("");
  const input = useRef(null);




  return (
    <View style={styles.wrapper}>
      <Text selectable selectionColor="red" numberOfLines={2} style={styles.title}>
        Lorem ipsum dolor sit amet 093092610, consectetur test@test.com adipisicing elit. Accusamus aliquid animi aut
        consectetur doloremque ducimus eveniet expedita facere itaque minus modi porro quam quibusdam quis sit, tempore
        temporibus totam vero.
      </Text>
      <Text style={[styles.title, styles.titleRed]}>Hello 2</Text>
      <TextInput
        ref={input}
        style={styles.input}
        value={text}
        enterKeyHint={Platform.OS === "ios" ? "done" : "previous"}
        onChangeText={setText}
        cursorColor="red"
        dataDetectorTypes="all"
        placeholder="hello"
        selectTextOnFocus
        placeholderTextColor="red"
        textAlign="center"
        onSubmitEditing={() => {
         alert( eval(text))
        }}
      />

      <Text style={styles.button}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "yellow",
    // flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: "#333",
    shadowColor: "#000",
    padding: 50,
    marginBottom: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 20,
  },
  titleRed: {
    color: "red",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
    height: 400,
  },
  input: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
    // height: 40,
  },
  button: {
    // backgroundColor: "red",
  },
});

export default App;
