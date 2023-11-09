import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import OnboardItem, { IBoardingItem } from "../../components/Onboarding";
import { OnboardingProps } from "../../navigators/Stack/StackNavigatorType";

const items: IBoardingItem[] = [
  {
    id: 1,
    img: require("../../assets/images/onboard-1.png"),
    title: "Explore Various Food Recipes",
    description:
      "Explore and find various food recipe from the ingredients that you have",
  },
  {
    id: 2,
    img: require("../../assets/images/onboard-2.png"),
    title: "Share Your Best Food Recipes",
    description:
      "Share the best food recipes you have made and get lots of claps",
  },
  {
    id: 3,
    img: require("../../assets/images/onboard-3.png"),
    title: "Try Making  Your Own Food Now",
    description: "Don't wait too long! Let's try make your own food now",
  },
];
const Onboarding = ({ route, navigation }: OnboardingProps) => {
  const [index, setIndex] = useState(0);

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <OnboardItem item={item} />}
        horizontal
        pagingEnabled={false}
        snapToAlignment="center"
      />
    </View>
  );
};

export default Onboarding;
