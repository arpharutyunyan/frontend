import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Button, AppState } from "react-native";
import { useNavigation, Link, useFocusEffect, useIsFocused } from "@react-navigation/native";
import { Toast } from "toastify-react-native";
import { useAppState } from "@react-native-community/hooks";

function Home(props) {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const currentAppState = useAppState()
  console.log(currentAppState);
  useEffect(() => {
    if (isFocused) {
      Toast.success("get users list");
    } else {
      Toast.info("blur");
    }
  }, [isFocused]);

  // useFocusEffect(useCallback(() => {
  //   Toast.success("get users list");
  //   return () => {
  //     Toast.info("blur");
  //   };
  // }, []))

  //
  // useEffect(() => {
  //   // alert('get users list');
  //   Toast.success("get users list");
  //   return () => {
  //     Toast.info("Unmount");
  //   };
  // }, []);
  return (
    <View>
      <Text>Home</Text>
      <Button title="product" onPress={() => navigation.navigate("SingleProduct")} />
      <Button
        title="Vazgen"
        onPress={() => navigation.navigate("SingleUser", { id: 3 })}
      />
      <Button
        title="Vazgen"
        onPress={() => navigation.navigate("AccountNavigation", { screen: "SingleUser", params: { id: 3 } })}
      />
      <Button
        title="Vazgen"
        onPress={async () => {
          await navigation.navigate("AccountNavigation");
          setTimeout(() => {
            navigation.navigate("SingleUser", { id: 3 });
          }, 0);
        }}
      />
    </View>
  );
}

export default Home;
