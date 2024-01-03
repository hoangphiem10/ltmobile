import { View, Text, FlatList, ImageSourcePropType } from "react-native";
import React, { useState } from "react";
import { SearchRecipesProps } from "../../navigators/Stack/StackNavigatorType";
import { SearchRecipeStyles } from "./style";
import TQPKTextInput from "../../components/TextInput/TQPKTextInput";
import TPQKIconButton from "../../components/IconButton/TPQKIconButton";
import { Strings } from "../../constants/Strings";
import TPQKText from "../../components/Text/TPQKText";
import TPQKButton from "../../components/Button/TPQKButton";
import { Constants } from "../../constants/constants";
import TPQKRecipe from "../../components/Card/TPQKRecipe";

const SearchRecipes = ({ route, navigation }: SearchRecipesProps) => {
  const FilterList: string[] = ['All', 'Quick', 'Healthy', 'Breakfast', 'Dinner']
  const Recipeitems: Array<{id:number;img: ImageSourcePropType}> = [
    {
      id: 1,
      img: Constants.Images.onboarding_1,
    },
    {
      id: 2,
      img: Constants.Images.onboarding_2,
    },
    {
      id: 3,
      img: Constants.Images.onboarding_3,
    },
  ];
  const FilterComponent = ({item}: {item: string}) => (
    console.log(item),
    <TPQKButton text={item} style={SearchRecipeStyles.Filterbtn} />

  );
  const [search, setSearch] = useState(route.params.searchValue);
  const [activeBtn, setActiveBtn] = useState<string>('All')
  const onSearchRecipes = () => {};
  return (
    <View style={SearchRecipeStyles.container}>
      {/* Search Field */}
      <View style={SearchRecipeStyles.searchContainer}>
        <TQPKTextInput
          onChangeText={(value) => setSearch(value)}
          value={search}
          placeholder="Search recipe"
        />
        <TPQKIconButton
          icon="restaurant-outline"
          color="white"
          size={20}
          styleButton={SearchRecipeStyles.searchBtn}
          onPress={onSearchRecipes}
        />
      </View>
      {/* Search Results */}
      <View style={SearchRecipeStyles.searchResults}>
        <TPQKText
          text={Strings.Search_Recipes.SearchResults}
          styleText={SearchRecipeStyles.searchResultText}
        />
        <TPQKText
          text={'255 results'}
          styleText={SearchRecipeStyles.totalResultText}
        />
      </View>
      {/* Filter */}
      <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={FilterList}
          renderItem={({ item }) => <FilterComponent item={item} />}
          keyExtractor={(item) => item}
        />
      {/* Recipe list */}
      <FlatList
          data={Recipeitems}
          numColumns={2}
          renderItem={({ item }) => <TPQKRecipe image={item.img} />}
          keyExtractor={(item) => String(item.id)}
        />
    </View>
  );
};

export default SearchRecipes;
