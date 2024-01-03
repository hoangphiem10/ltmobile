import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import TPQKText from "../Text/TPQKText";

interface ButtonProps {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  styleTextBtn? : StyleProp<TextStyle>,
  type?: string;
}
const TPQKButton = ({
  text,
  isLoading = false,
  onPress = undefined,
  disabled = false,
  children,
  style = {},
  styleTextBtn = {},
  type = "",
}: ButtonProps) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={onPress} disabled={disabled || isLoading}>
        <View
          style={[
            {
              ...styles.button,
              backgroundColor: disabled ? "gainsboro" : "#129575",
            },
            style,
          ]}
        >
          {isLoading ? (
            <ActivityIndicator size="small" />
          ) : (
            <View style={styles.buttonContent}>
              {children}
              <TPQKText text={text} styleText={[styles.buttonText, styleTextBtn]} />
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
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  buttonContent: {
    alignItems: "center",
    flexDirection: "row",
  },
});
export default TPQKButton;
