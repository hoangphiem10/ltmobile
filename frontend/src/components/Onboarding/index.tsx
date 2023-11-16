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
  GestureResponderEvent,
} from "react-native";
import React from "react";
import TPQKButton from "../Button/TPQKButton";
export interface IBoardingItem {
  id: number;
  img: ImageSourcePropType;
  title: string;
  description: string;
}
interface IOnboardItemProps {
  item: IBoardingItem;
  handleGoToNext: () => void;
  handleSkip: () => void;
}
const OnboardItem = ({
  item,
  handleGoToNext,
  handleSkip,
}: IOnboardItemProps) => {
  return (
    <View>
      <ImageBackground
        source={item.img}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <TPQKButton text="Next" style={styles.btn} onPress={handleGoToNext} />
          <TPQKButton text="Skip" style={styles.skipBtn} onPress={handleSkip} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default OnboardItem;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  description: {
    color: "white",
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: 402,
  },
  btn: {
    marginTop: 20,
    width: "50%",
  },
  skipBtn: {
    backgroundColor: "transparent",
    width: "10%",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 70,
  },
});
