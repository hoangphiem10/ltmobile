import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "./BottomNavigatorType";
import { Home, SavedRecipes, Notification, Profile } from "../../screens";
import Icon from "react-native-vector-icons/Ionicons";
import { Screens } from "../../constants/Screens";
const Tab = createBottomTabNavigator<TabParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={Screens.HOME}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#129575",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === Screens.HOME) {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === Screens.SAVED_RECIPES) {
            iconName = focused ? "md-bookmark" : "md-bookmark-outline";
          } else if (route.name === Screens.NOTIFICATION) {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          } else if (route.name === Screens.PROFILE) {
            iconName = focused ? "md-person" : "md-person-outline";
          }

          return <Icon name={iconName as string} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={Screens.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.SAVED_RECIPES}
        component={SavedRecipes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.NOTIFICATION}
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Screens.PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
