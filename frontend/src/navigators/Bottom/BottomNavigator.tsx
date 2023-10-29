import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabParamList } from "./BottomNavigatorType";
import { Home, SavedRecipes, Notification, Profile } from "../../screens";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator<TabParamList>();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#129575",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "SavedRecipes") {
            iconName = focused ? "md-bookmark" : "md-bookmark-outline";
          } else if (route.name === "Notification") {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "md-person" : "md-person-outline";
          }

          return <Icon name={iconName as string} size={22} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SavedRecipes"
        component={SavedRecipes}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
