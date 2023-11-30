import {
  View,
  Text,
  TextStyle,
  StyleProp,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import React from "react";
interface IText {
  text?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
}
const TPQKText = ({
  text = "",
  onPress = undefined,
  style = {},
  styleText = {},
}: IText) => {
  return (
    <View style={style}>
      <Text style={[styles.text, styleText]} onPress={onPress}>
        {text}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
export default TPQKText;
