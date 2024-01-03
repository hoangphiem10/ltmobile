import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
import TPQKImage from "../../components/Image/TPQKImage";
import TPQKText from "../../components/Text/TPQKText";
import TPQKTrending from "../../components/Card/TPQKTrending";
import { Screens } from "../../constants/Screens";
import TPQKNewRecipe from "../../components/Card/TPQKNewRecipe";
export interface TrendingType {
  id: string;
  img: ImageSourcePropType;
  name: string;
  time: string;
}
export interface NewRecipesType {
  id: string;
  img: ImageSourcePropType;
  ratingStar: number;
  userName: string;
  userAvatar: ImageSourcePropType;
  recipe: string;
  time: string;
}
const Home = ({ route, navigation }: HomeProps) => {
  const userLoggedIn = useAppSelector(currUser);
  const [search, setSearch] = useState("");
  const [searchError, setSearchError] = useState("");

  const { fullname, avatar } = userLoggedIn;
  const trendingList: Array<TrendingType> = [
    {
      id: "1",
      img: Constants.Images.home_trending_card_1,
      name: "Classic Greek Salad",
      time: "15Mins",
    },
    {
      id: "2",
      img: Constants.Images.home_trending_card_2,
      name: "Crunchy Nut Coleslaw",
      time: "15Mins",
    },
    {
      id: "3",
      img: Constants.Images.home_trending_card_3,
      name: "Classic Greek Salad",
      time: "15Mins",
    },
    {
      id: "4",
      img: Constants.Images.home_trending_card_4,
      name: "Crunchy Nut Coleslaw",
      time: "15Mins",
    },
    {
      id: "5",
      img: Constants.Images.home_trending_card_5,
      name: "Classic Greek Salad",
      time: "15Mins",
    },
  ];
  const NewRecipesList: Array<NewRecipesType> = [
    {
      id: "1",
      img: Constants.Images.home_trending_card_1,
      ratingStar: 4,
      userName: "James Milners",
      userAvatar: Constants.Images.avatar,
      recipe: "Classic Greek Salad",
      time: "15Mins",
    },
    {
      id: "2",
      img: Constants.Images.home_trending_card_1,
      ratingStar: 4,
      userName: "James Milners",
      userAvatar: Constants.Images.avatar,
      recipe: "Classic Greek Salad",
      time: "15Mins",
    },
    {
      id: "3",
      img: Constants.Images.home_trending_card_1,
      ratingStar: 4,
      userName: "James Milners",
      userAvatar: Constants.Images.avatar,
      recipe: "Classic Greek Salad",
      time: "15Mins",
    },
  ];
  const LeftHeader = (): React.ReactNode => (
    <View>
      <TPQKText
        text={`${Strings.Home.headerTitle} ${fullname}`}
        styleText={HomeStyles.headerTitle}
      />
      <TPQKText
        text={Strings.Home.headerDescription}
        styleText={HomeStyles.headerDesc}
      />
    </View>
  );
  const RightHeader = (): React.ReactNode => (
    <TPQKImage
      url={avatar ? (avatar as ImageSourcePropType) : Constants.Images.avatar}
      styleImage={HomeStyles.headerAvatar}
    />
  );

  const onSearchRecipes = () => {
    if (search) {
      if (searchError) setSearchError("");
      navigation.push(Screens.SEARCH_RECIPES, {
        searchValue: search,
      });
    } else {
      setSearchError("Please enter the value to search recipes");
    }
  };
  return (
    <ScrollView style={HomeStyles.constainer}>
      {/* Header Field */}
      <TQPKHeader
        isBack={false}
        LeftHeader={<LeftHeader />}
        RightHeader={<RightHeader />}
      />
      {/* Search Field */}
      <View style={HomeStyles.searchContainer}>
        <TQPKTextInput
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder="Search recipe"
          error={searchError}
        />
        <TPQKIconButton
          icon="restaurant-outline"
          color="white"
          size={20}
          styleButton={HomeStyles.searchBtn}
          onPress={onSearchRecipes}
        />
      </View>
      {/* Special offer */}
      <TPQKText
        text={Strings.Home.specialOffer}
        style={HomeStyles.specialOffer}
        styleText={HomeStyles.text}
      />
      <TPQKImage url={Constants.Images.home_1} styleImage={HomeStyles.image} />
      <TPQKImage url={Constants.Images.home_2} styleImage={HomeStyles.image} />
      {/* Treding Today */}
      <TPQKText
        text={Strings.Home.trendingToday}
        style={HomeStyles.TrendingToday}
        styleText={HomeStyles.text}
      />
      <View style={HomeStyles.styleViewCard}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={trendingList}
          renderItem={({ item }) => <TPQKTrending item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* New Recipes */}
      <TPQKText
        text={Strings.Home.newRecipes}
        style={HomeStyles.newRecipes}
        styleText={HomeStyles.text}
      />
      <View style={HomeStyles.styleViewCard}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={NewRecipesList}
          renderItem={({ item }) => <TPQKNewRecipe item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
