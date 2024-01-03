import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { TabParamList } from "../Bottom/BottomNavigatorType";
import { Screens } from "../../constants/Screens";

type SearchRecipesParams = {
  searchValue: string;
};

export type StackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainApp: NavigatorScreenParams<TabParamList>;
  SearchRecipes: SearchRecipesParams;
};
export type OnboardingProps = NativeStackScreenProps<
  StackParamList,
  Screens.Onboarding
>;
export type SignInProps = NativeStackScreenProps<
  StackParamList,
  Screens.SIGN_IN
>;
export type SignUpProps = NativeStackScreenProps<
  StackParamList,
  Screens.SIGN_UP
>;
export type SearchRecipesProps = NativeStackScreenProps<
  StackParamList,
  Screens.SEARCH_RECIPES
>;
