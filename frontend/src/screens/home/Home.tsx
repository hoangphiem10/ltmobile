import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { currUser } from "../../redux/features/auth/authSlice";
import { HomeProps } from "../../navigators/Bottom/BottomNavigatorType";
import { HomeStyles } from "./style";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { Constants } from "../../constants/constants";
import TQPKTextInput from "../../components/TextInput/TQPKTextInput";
import Icon from "react-native-vector-icons/Ionicons";
import TPQKIconButton from "../../components/IconButton/TPQKIconButton";
import { Strings } from "../../constants/Strings";
const Home = ({ route, navigation }: HomeProps) => {
  const userLoggedIn = useAppSelector(currUser);
  const [search, setSearch] = useState("");
  const { fullname, avatar } = userLoggedIn;
  const LeftHeader = (): React.ReactNode => (
    <View>
      <Text
        style={HomeStyles.headerTitle}
      >{`${Strings.Home.headerTitle} ${fullname}`}</Text>
      <Text style={HomeStyles.headerDesc}>
        {Strings.Home.headerDescription}
      </Text>
    </View>
  );
  const RightHeader = (): React.ReactNode => (
    <View>
      <Image
        style={HomeStyles.headerAvatar}
        source={
          avatar ? (avatar as ImageSourcePropType) : Constants.Images.avatar
        }
      />
    </View>
  );
  return (
    <View style={HomeStyles.constainer}>
      <TQPKHeader
        isBack={false}
        LeftHeader={<LeftHeader />}
        RightHeader={<RightHeader />}
      />
      <View style={HomeStyles.searchContainer}>
        <TQPKTextInput
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder="Search recipe"
        />
        <TPQKIconButton
          icon="restaurant-outline"
          color="white"
          size={20}
          styleButton={HomeStyles.searchBtn}
        />
      </View>
    </View>
  );
};

export default Home;
