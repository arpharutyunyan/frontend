import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RegisterNavigation from "./HomeNavigation";
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
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            title: "Home",
            tabBarIcon: (p) => <Icon size={p.size} color={p.color} name="home" />,
          }}
        />
        <Tab.Screen
          name="SettingsNavigation"
          component={SettingsNavigation}
          options={{
            title: "Settings",
            tabBarIcon: (p) => <Icon size={p.size} color={p.color} name="settings" />,
          }}
        />
        <Tab.Screen
          name="AccountNavigation"
          component={AccountNavigation}
          options={{
            title: "Account",
            tabBarIcon: (p) => <Icon size={p.size} color={p.color} name="person" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
