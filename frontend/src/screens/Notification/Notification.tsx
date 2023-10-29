import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { NotificationStyles } from "./style";

const Notification = () => {
  return (
    <SafeAreaView>
      <TQPKHeader
        isBack={false}
        styleHeader={NotificationStyles.headerContent}
        MiddleHeader={<Text>Notifications</Text>}
      />
    </SafeAreaView>
  );
};

export default Notification;
