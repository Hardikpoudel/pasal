import { Platform } from "react-native";

// url deployed in heroko
// let baseURL = "https://pasal-server.herokuapp.com/api/v1/";
// emulator has seperate host address from local host address
{
  Platform.OS == "android"
    ? (baseURL = "http://10.0.2.2:3000/api/v1/")
    : (baseURL = "http://localhost:3000/api/v1/");
}

export default baseURL;
