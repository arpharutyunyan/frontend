import React from "react";
import Main from "./components/Main";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native";
import Animations from "./components/Animations";

function App(props) {
  return (
    <SafeAreaProvider>
      <Animations />
      <ToastManager />
    </SafeAreaProvider>
  );
}

export default App;
