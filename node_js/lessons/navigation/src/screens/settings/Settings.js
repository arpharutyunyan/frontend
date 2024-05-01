import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Settings(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("UpdateSettings")}
      />
      <Button
        title="Settings Wifi"
        onPress={() => navigation.navigate("UpdateSettings", {name: 'Wifi'})}
      />
      <Button
        title="Settings bluetooth"
        onPress={() => navigation.navigate("UpdateSettings", {name: 'bluetooth'})}
      />
    </View>
  );
}

export default Settings;
