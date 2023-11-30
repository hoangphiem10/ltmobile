import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TPQKIconButton from "../IconButton/TPQKIconButton";
import TPQKText from "../Text/TPQKText";
import TPQKImage from "../Image/TPQKImage";
import { NewRecipesType } from "../../screens/home/Home";
import { Constants } from "../../constants/constants";

interface ITPQKRecipe {
  item: NewRecipesType;
}
const TPQKRecipe = ({ item }: ITPQKRecipe) => {
  const RatingStar = ({ numOfStar }: { numOfStar: number }) =>
    Array.from({ length: numOfStar }).map((_, index) => (
      <TPQKIconButton icon="star" color={"orange"} key={index} />
    ));
  return (
    <View>
      <TPQKImage url={item.img} styleImage={styles.styleImage} />
      <View style={styles.card}>
        <View style={styles.body}>
          <TPQKText text={item.recipe} styleText={styles.recipe} />
          <View style={{ marginTop: 6, flexDirection: "row" }}>
            <RatingStar numOfStar={item.ratingStar} />
          </View>
          <View style={styles.footer}>
            <View
              style={{
                marginTop: 6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TPQKImage
                url={Constants.Images.avatar}
                styleImage={styles.avatar}
              />
              <TPQKText
                text={`By ${item.userName}`}
                styleText={styles.username}
              />
            </View>
            <View style={styles.footerIcon}>
              <TPQKIconButton icon="time-outline" color={"green"} />
              <TPQKText text={item.time} styleText={styles.time} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 300,
    height: 130,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 20,
    marginBottom: 30,
  },
  styleImage: {
    marginTop: -70,
    width: 160,
    height: 120,
    top: 70,
    zIndex: 1,
    left: "50%",
  },
  body: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
  },
  recipe: {
    fontSize: 18,
    color: "#484848",
    fontWeight: "bold",
  },
  timeText: {
    color: "#A9A9A9",
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  username: {
    fontSize: 14,
    color: "#484848",
    paddingLeft: 8,
    fontWeight: "bold",
  },
  time: {
    fontSize: 14,
    color: "#A9A9A9",
    paddingLeft: 8,
    fontWeight: "bold",
  },
  footer: {
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },
  footerIcon: {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
export default TPQKRecipe;
