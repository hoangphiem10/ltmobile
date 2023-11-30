import {
  View,
  Image,
  StyleProp,
  StyleSheet,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from "react-native";
import React from "react";
interface IImage {
  url: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  styleImage?: StyleProp<ImageStyle>;
}
const TPQKImage = ({ url, style = {}, styleImage = {} }: IImage) => {
  return (
    <View style={style}>
      <Image style={[styles.image, styleImage]} source={url} />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 20,
  },
});

export default TPQKImage;
