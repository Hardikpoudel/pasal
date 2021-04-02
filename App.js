import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// using redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// using context-API
import Auth from "./Context/store/Auth";

// using created navigators
import Main from "./Navigators/Main";

// Screens
import Header from "./Shared/Header";

LogBox.ignoreAllLogs(true);

const App = () => {
  // console.log("hello world third time");
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
};

export default App;

AppRegistry.registerComponent("albums", () => App);
