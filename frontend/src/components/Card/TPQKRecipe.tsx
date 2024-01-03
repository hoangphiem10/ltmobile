import { View, ImageBackground, StyleSheet, Text, ImageSourcePropType } from "react-native";
import React from "react";

import { NewRecipesType } from "../../screens/home/Home";
import { Constants } from "../../constants/constants";
import TPQKImage from "../Image/TPQKImage";


const TPQKRecipe = ({image}: {image: ImageSourcePropType}) => {
  return (
    <View>
      <TPQKImage style={styles.container} styleImage={styles.image} url = {image}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft:30,
  },
  image: {
    resizeMode: "cover",
    borderRadius:15,
    width:150,
    height:150

  },
});

export default TPQKRecipe;
