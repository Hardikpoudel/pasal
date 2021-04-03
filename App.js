import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, AppRegistry } from "react-native";

//react-navigation offers several metods to navigate through our app
//it is a extensible tool and can be configured and navigate as we want
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// importing redux
import { Provider } from "react-redux";
import store from "./Redux/store";

// using context-API
//same as redux
//we start with our state(props)
//allows us to access those application anywhere in the application
// without having to passing down manually
//so the our login is always there, dont need to login everytime
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
      {/* encapsulate entire application inside the Provider */}
      {/* in-order to manage state in the entire application */}
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          {/* calling the main navigator inside the navigationcontainer */}
          <Main />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
};

export default App;

AppRegistry.registerComponent("albums", () => App);
