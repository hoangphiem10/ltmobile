import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { SavedRecipesStyles } from "./style";
import TPQKText from "../../components/Text/TPQKText";

const SavedRecipes = () => {
  return (
    <View>
      <TQPKHeader
        isBack={false}
        styleHeader={SavedRecipesStyles.headerContent}
        MiddleHeader={<TPQKText text={"Saved Recipes"} />}
      />
    </View>
  );
};

export default SavedRecipes;
