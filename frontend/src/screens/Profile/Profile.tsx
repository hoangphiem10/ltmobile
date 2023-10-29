import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TQPKHeader from "../../components/Header/TQPKHeader";
import TPQKIconButton from "../../components/IconButton/TPQKIconButton";
import TPQKMenu from "../../components/Menu/TPQKMenu";
export interface IMenuOptions {
  id: string;
  icon: React.ReactNode;
  name: string;
  onSelect?: () => void;
}
const Profile = () => {
  const menuOptions: IMenuOptions[] = [
    {
      id: "1",
      icon: <TPQKIconButton icon="share" />,
      name: "Share",
    },
    {
      id: "2",
      icon: <TPQKIconButton icon="star" />,
      name: "Rate Recipe",
    },
    {
      id: "3",
      icon: <TPQKIconButton icon="chatbox-ellipses" />,
      name: "Review",
    },
    {
      id: "4",
      icon: <TPQKIconButton icon="bookmark" />,
      name: "Unsave",
    },
  ];
  return (
    <SafeAreaView>
      <TQPKHeader
        isBack={false}
        LeftHeader={<View></View>}
        MiddleHeader={<Text>Profile</Text>}
        RightHeader={<TPQKMenu<IMenuOptions> menuOptions={menuOptions} />}
      />
    </SafeAreaView>
  );
};

export default Profile;
