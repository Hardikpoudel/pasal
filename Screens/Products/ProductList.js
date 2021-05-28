import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

import ProductCard from "./ProductCard";

var { width } = Dimensions.get("window");

const ProductList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity
      style={{ width: "50%" }}
      // navigating to the detail page of onpress item
      // use the navigate property thet we create on navigation
      //navigate to product detail page which we create in homeNavigator
      //followed by props and its name
      //the props item is the one which we create in singleproduct page followed by the object i.e. item
      onPress={() =>
        props.navigation.navigate("Product Detail", { item: item })
      }
    >
      <View style={{ width: width / 2, backgroundColor: "#D2E7AC" }}>
        <ProductCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductList;
