import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MenuProvider } from "react-native-popup-menu";
import { store } from "./src/redux/store";
import { Provider } from "react-redux";
import TQPKToast from "./src/components/Toast/TQPKToast";
import StackNavigator from "./src/navigators/Stack/StackNavigator";
import FCMService from "./src/utils/FCMService";
import messaging from "@react-native-firebase/messaging";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import { useEffect } from "react";
import DLService from "./src/utils/DLService";
// Handle background messages using setBackgroundMessageHandler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background!", remoteMessage);
});
export default function App() {
  useEffect(() => {
    FCMService.requestUserPermission();
    FCMService.notificationListener();
    // DLService.dynamicLinksListener();
    const unsubscribeFCM = messaging().onMessage(async (remoteMessage) => {
      console.log(remoteMessage);
    });
    // const unsubscribeDL = dynamicLinks().onLink(DLService.handleDynamicLink);
    return () => {
      unsubscribeFCM;
      // unsubscribeDL;
    };
  }, []);
  return (
    <SafeAreaProvider style={styles.mobileSafeArea}>
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

const styles = StyleSheet.create({
  mobileSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
