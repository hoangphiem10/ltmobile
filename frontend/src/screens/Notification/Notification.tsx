import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { NotificationStyles } from "./style";
import TPQKText from "../../components/Text/TPQKText";

const Notification = () => {
  return (
    <View>
      <TQPKHeader
        isBack={false}
        styleHeader={NotificationStyles.headerContent}
        MiddleHeader={<TPQKText text={"Notifications"} />}
      />
    </View>
  );
};

export default Notification;
