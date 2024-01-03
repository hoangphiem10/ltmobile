import React from "react";
import { SignIn, SignUp, Onboarding, SearchRecipes } from "../../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { StackParamList } from "./StackNavigatorType";
import BottomNavigator from "../Bottom/BottomNavigator";
import { Screens } from "../../constants/Screens";
import TPQKText from "../../components/Text/TPQKText";
import { View } from "react-native";
const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.Onboarding}>
      <Stack.Screen
        name={Screens.Onboarding}
        component={Onboarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.SIGN_IN}
        component={SignIn}
        options={{
          header: (props) => <TQPKHeader isBack={false} {...props} />,
        }}
      />
      <Stack.Screen
        name={Screens.SIGN_UP}
        component={SignUp}
        options={{
          header: (props) => <TQPKHeader {...props} />,
        }}
      />
      <Stack.Screen
        name={Screens.MAIN_APP}
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screens.SEARCH_RECIPES}
        component={SearchRecipes}
        options={{
          header: (props) => (
            <TQPKHeader
              {...props}
              // style={{ backgroundColor: "white" }}
              LeftHeader={<View></View>}
              MiddleHeader={<TPQKText text={"Search recipes"} />}
              RightHeader={<View></View>}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
