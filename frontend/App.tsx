import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MenuProvider } from "react-native-popup-menu";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import TQPKToast from "./src/components/Toast/TQPKToast";
import StackNavigator from "./src/navigators/Stack/StackNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MenuProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
          <TQPKToast />
        </MenuProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
