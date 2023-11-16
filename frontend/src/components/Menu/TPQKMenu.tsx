import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Menu,
  MenuOptions,
  MenuTrigger,
  MenuOption,
} from "react-native-popup-menu";
import TPQKIconButton from "../IconButton/TPQKIconButton";
import Icon from "react-native-vector-icons/Ionicons";
interface IMenuOptions {
  id: string;
  icon: React.ReactNode;
  name: string;
  onSelect?: () => void;
}
interface ITPQKMenuProps<T extends IMenuOptions> {
  menuOptions: T[];
}

const TPQKMenu = <T extends IMenuOptions>({
  menuOptions,
}: ITPQKMenuProps<T>) => {
  return (
    <Menu>
      <MenuTrigger>
        <Icon name="ellipsis-horizontal" color="black" size={20} />
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={styles.menuOptions}>
        <FlatList
          data={menuOptions}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MenuOption
              onSelect={item.onSelect}
              customStyles={{
                optionWrapper: styles.menuOption,
              }}
            >
              <Text>{item.icon}</Text>
              <Text style={styles.text}>{item.name}</Text>
            </MenuOption>
          )}
        />
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  menuOptions: {
    marginTop: 25,
    width: 140,
  },

  menuOption: {
    flexDirection: "row",
    alignItems: "center",
    height: 35,
    paddingLeft: 10,
  },

  text: {
    color: "black",
    marginLeft: 10,
  },
});

export default TPQKMenu;
