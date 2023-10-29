import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";

interface HeaderProps extends Partial<NativeStackHeaderProps> {
  isBack?: boolean;
  LeftHeader?: React.ReactNode;
  MiddleHeader?: React.ReactNode;
  RightHeader?: React.ReactNode;
  options?: NativeStackNavigationOptions;
  navigation?: any;
  style?: StyleProp<ViewStyle>;
  styleHeader?: StyleProp<ViewStyle>;
}

const TQPKHeader = ({
  isBack = true,
  LeftHeader = null,
  MiddleHeader = null,
  RightHeader = null,
  options,
  navigation,
  style,
  styleHeader,
}: HeaderProps) => {
  return (
    <View style={[styles.headerContainer, style]}>
      <View style={[styles.headerContent, styleHeader]}>
        {isBack && (
          <AntDesign
            size={20}
            style={styles.leftHeader}
            name="arrowleft"
            color="#129575"
            onPress={() => navigation.goBack()}
          />
        )}
        {LeftHeader && <View>{LeftHeader}</View>}
        {MiddleHeader && <View>{MiddleHeader}</View>}
        {RightHeader && <View>{RightHeader}</View>}
        {options && <Text style={styles.title}>{options?.title}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#129575",
    fontWeight: "600",
  },
  leftHeader: {
    position: "absolute",
    left: 0,
  },
});

export default TQPKHeader;
