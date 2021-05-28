import React, { useEffect, useState, useContext } from "react";
import { Text, View, Button } from "react-native";
import { Toast } from "native-base";
// import Icon from "react-native-vector-icons/FontAwesome";
import FormContainer from "../../../Shared/Form/FormContainer";
import Input from "../../../Shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthGlobal from "../../../Context/store/AuthGlobal";

import { connect } from "react-redux";

// const countries = require("../../../assets/countries.json");

const Checkout = (props) => {
  const context = useContext(AuthGlobal);

  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [country, setCountry] = useState();
  const [phone, setPhone] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);

    if (context.stateUser.isAuthenticated) {
      setUser(context.stateUser.user.userId);
    } else {
      props.navigation.navigate("Cart");
      Toast.show({
        topOffset: 60,
        type: "error",
        text1: "Please Login to Checkout",
        text2: "",
      });
    }

    return () => {
      setOrderItems();
    };
  }, []);

  const checkOut = () => {
    let orders = {
      city,
      country,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      status: "3",
      user,
      zip,
    };
    console.log(orders);
    props.navigation.navigate("Payment", { order: orders });
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer>
        <Text style={{ fontSize: 20 }}>Shipping Address</Text>
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />
        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />
        <Input
          placeholder={"Shipping Address 2"}
          name={"ShippingAddress2"}
          value={address2}
          onChangeText={(text) => setAddress2(text)}
        />
        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"Zip Code"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => setZip(text)}
        />
        <Input
          placeholder={"Country"}
          name={"country"}
          value={country}
          onChangeText={(text) => setCountry(text)}
        />
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Confirm" onPress={() => checkOut()} />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(Checkout);
