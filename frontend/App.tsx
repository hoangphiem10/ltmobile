import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MenuProvider } from "react-native-popup-menu";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import TQPKToast from "./src/components/Toast/TQPKToast";
import StackNavigator from "./src/navigators/Stack/StackNavigator";
import FCMService from "./src/utils/FCMService";
import messaging from "@react-native-firebase/messaging";
import { useEffect } from "react";
// Handle background messages using setBackgroundMessageHandler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});
export default function App() {
  useEffect(() => {
    FCMService.requestUserPermission();
    FCMService.notificationListener();
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage);
    });

    return unsubscribe;
  }, []);
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
