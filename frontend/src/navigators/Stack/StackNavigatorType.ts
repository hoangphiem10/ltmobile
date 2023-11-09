import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TabParamList } from "../Bottom/BottomNavigatorType";

export type StackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: NavigatorScreenParams<TabParamList>;
};
export type OnboardingProps = NativeStackScreenProps<
  StackParamList,
  "Onboarding"
>;
export type SignInProps = NativeStackScreenProps<StackParamList, "SignIn">;
export type SignUpProps = NativeStackScreenProps<StackParamList, "SignUp">;
