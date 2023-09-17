import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { HomeProps } from "../../navigators/Stack/StackNavigatorType";
import { useAppSelector } from "../../redux/hooks";
import { currUser } from "../../redux/features/auth/authSlice";

const Home = ({ route, navigation }: HomeProps) => {
  const userLoggedIn = useAppSelector(currUser);
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
