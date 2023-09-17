import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface LoadingButtonProps {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: string;
}
const TPQKLoadingBtn = ({
  text,
  isLoading = false,
  onPress = undefined,
  disabled = false,
  children,
  style = {},
  type = "",
}: LoadingButtonProps) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={onPress} disabled={disabled || isLoading}>
        <View
          style={[
            {
              ...styles.button,
              backgroundColor: disabled ? "gainsboro" : "#1E90FF",
            },
            style,
          ]}
        >
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <View style={styles.buttonContent}>
              {children}
              <Text style={styles.buttonText}>{text}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    height: 40,
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
  },
  buttonContent: {
    alignItems: "center",
    flexDirection: "row",
  },
});
export default TPQKLoadingBtn;
