import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
  ImageSourcePropType,
  ImageBackground,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
export interface IBoardingItem {
  id: number;
  img: ImageSourcePropType;
  title: string;
  description: string;
}
const OnboardItem = ({ item }: { item: IBoardingItem }) => {
  const translateYImage = new Animated.Value(40);
  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardItem;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // alignItems: "center",
  },
  image: {
    flex: 0.6,
    width: "100%",
    // height: "100%",
  },
  content: {
    flex: 0.4,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 18,
    // marginVertical: 12,
    color: "#333",
  },
});
