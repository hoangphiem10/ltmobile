import React from "react";
import { SignIn, SignUp, Home } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { StackParamList } from "./StackNavigatorType";
const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"SignIn"}>
      <Stack.Screen
        name={"SignIn"}
        component={SignIn}
        options={{
          title: "Sign In",
          header: (props) => <TQPKHeader isBack={false} {...props} />,
        }}
      />
      <Stack.Screen
        name={"SignUp"}
        component={SignUp}
        options={{
          title: "Sign Up",
          header: (props) => <TQPKHeader {...props} />,
        }}
      />
      <Stack.Screen
        name={"Home"}
        component={Home}
        options={{
          title: "Home",
          header: (props) => <TQPKHeader isBack={false} {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
