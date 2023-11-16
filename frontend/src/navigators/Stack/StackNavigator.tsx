import React from "react";
import { SignIn, SignUp, Onboarding } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { StackParamList } from "./StackNavigatorType";
import BottomNavigator from "../Bottom/BottomNavigator";
const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Onboarding"}>
      <Stack.Screen
        name={"Onboarding"}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={"SignIn"}
        component={SignIn}
        options={{
          header: (props) => <TQPKHeader isBack={false} {...props} />,
        }}
      />
      <Stack.Screen
        name={"SignUp"}
        component={SignUp}
        options={{
          header: (props) => <TQPKHeader {...props} />,
        }}
      />
      <Stack.Screen
        name={"MainApp"}
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
