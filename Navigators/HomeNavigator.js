import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";

//creating stack same way we create for the tab navigation
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductContainer}
        options={{
          headerShown: false,
        }}
      />
      {/* navigating for the detail page of the selected product */}
      <Stack.Screen
        name="Product Detail"
        component={SingleProduct}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
