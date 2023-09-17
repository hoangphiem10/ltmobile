import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

export type StackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
};
export type SignInProps = NativeStackScreenProps<StackParamList, "SignIn">;
export type SignUpProps = NativeStackScreenProps<StackParamList, "SignUp">;
export type HomeProps = NativeStackScreenProps<StackParamList, "Home">;
