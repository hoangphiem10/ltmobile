import { Platform, PermissionsAndroid } from "react-native";
import messaging, {
  FirebaseMessagingTypes,
} from "@react-native-firebase/messaging";
import { Helper } from "../helper/helper";
class FCMService {
  requestUserPermission = async () => {
    if (Platform.OS === "ios") {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Authorization status:", authStatus);
        this.getDevideToken();
      }
    }
    if (Platform.OS === "android") {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );
    }
  };
  getDevideToken = async () => {
    await messaging().registerDeviceForRemoteMessages();
    const token = await messaging().getToken();
    // save the token to the db
    await Helper.Secure.setString("fcmToken", token);
  };
  notificationListener = async () => {
    /**
     * When the application is opened from a quit state.
     */
    const getInitialNotificationMsg =
      await messaging().getInitialNotification();
    if (getInitialNotificationMsg) {
      this.handleOnReceiveNotification(getInitialNotificationMsg);
    }
    /**
     * When the application is running, but in the background.
     */
    messaging().onNotificationOpenedApp((remoteMessage) =>
      this.handleOnReceiveNotification(remoteMessage)
    );
  };
  handleOnReceiveNotification = async (
    message: FirebaseMessagingTypes.RemoteMessage
  ) => {
    console.log(message);
  };
}
export default new FCMService();
