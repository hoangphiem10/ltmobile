import {
  View,
  Text,
  TouchableOpacity,
  TextStyle,
  StyleProp,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

interface IconButtonProps {
  icon: string;
  color?: string;
  size?: number;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  styleButton?: StyleProp<TextStyle>;
}
const TPQKIconButton = ({
  icon,
  color = "black",
  size = 20,
  onPress = undefined,
  styleButton = {},
}: IconButtonProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styleButton}>
          <View>
            <Icon name={icon} color={color} size={size} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TPQKIconButton;
