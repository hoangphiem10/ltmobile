import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { StackParamList } from "../Stack/StackNavigatorType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
export type TabParamList = {
  Home: undefined;
  SavedRecipes: undefined;
  Notification: undefined;
  Profile: undefined;
};
export type HomeProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Home">,
  NativeStackScreenProps<StackParamList>
>;
export type SavedRecipesProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "SavedRecipes">,
  NativeStackScreenProps<StackParamList>
>;
export type NotificationProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Notification">,
  NativeStackScreenProps<StackParamList>
>;
export type ProfileProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Profile">,
  NativeStackScreenProps<StackParamList>
>;
