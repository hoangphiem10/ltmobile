import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackParamList } from "../Stack/StackNavigatorType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Screens } from "../../constants/Screens";
export type TabParamList = {
  Home: undefined;
  SavedRecipes: undefined;
  Notification: undefined;
  Profile: undefined;
};
export type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, Screens.HOME>,
  NativeStackScreenProps<StackParamList>
>;
export type SavedRecipesProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, Screens.SAVED_RECIPES>,
  NativeStackScreenProps<StackParamList>
>;
export type NotificationProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, Screens.NOTIFICATION>,
  NativeStackScreenProps<StackParamList>
>;
export type ProfileProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, Screens.PROFILE>,
  NativeStackScreenProps<StackParamList>
>;
