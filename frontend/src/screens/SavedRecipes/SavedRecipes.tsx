import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TQPKHeader from "../../components/Header/TQPKHeader";
import { SavedRecipesStyles } from "./style";

const SavedRecipes = () => {
  return (
    <SafeAreaView>
      <TQPKHeader
        isBack={false}
        styleHeader={SavedRecipesStyles.headerContent}
        MiddleHeader={<Text>Saved recipes</Text>}
      />
    </SafeAreaView>
  );
};

export default SavedRecipes;
