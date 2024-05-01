import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RegisterNavigation from "./RegisterNavigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import SettingsNavigation from "./SettingsNavigation";
import AccountNavigation from "./AccountNavigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};

function Navigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="RegisterNavigation"
          component={RegisterNavigation}
          options={{
            title: "Register",
            tabBarIcon: (p) => <Icon size={p.size} color={p.color} name="account-box" />,
          }}
        />
        <Tab.Screen
          name="LoginNavigation"
          component={SettingsNavigation}
          options={{
            title: "Login",
            tabBarIcon: (p) => <Icon size={p.size} color={p.color} name="login" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
