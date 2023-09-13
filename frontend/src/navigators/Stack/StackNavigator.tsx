import React from "react";
import SignIn from "../../screens/SignIn";
import SignUp from "../../screens/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../../constants/Screens";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Screens.SIGN_IN}
    >
      <Stack.Screen
        name={Screens.SIGN_IN}
        component={SignIn}
        options={
          {
            // title: "Sign In",
            //   header: (props) => <HomeHeader {...props} />,
          }
        }
      />
      <Stack.Screen
        name={Screens.SIGN_UP}
        component={SignUp}
        options={
          {
            // title: "Sign Up",
            //   header: (props) => <HomeHeader {...props} />,
          }
        }
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
