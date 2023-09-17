import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";

interface HeaderProps extends NativeStackHeaderProps {
  isBack?: boolean;
  style?: StyleProp<ViewStyle>;
}

const TQPKHeader = ({
  isBack = true,
  options,
  navigation,
  style,
}: HeaderProps) => {
  return (
    <SafeAreaView style={[styles.headerContainer, style]}>
      <View style={styles.headerContent}>
        {isBack && (
          <AntDesign
            size={20}
            style={styles.leftHeader}
            name="arrowleft"
            color="#1E90FF"
            onPress={() => navigation.goBack()}
          />
        )}
        <Text style={styles.title}>{options.title}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headerContent: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#1E90FF",
    fontWeight: "600",
  },
  leftHeader: {
    position: "absolute",
    left: 0,
  },
});

export default TQPKHeader;
