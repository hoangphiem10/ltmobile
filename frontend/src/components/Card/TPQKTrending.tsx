import { View, Text, StyleSheet } from "react-native";
import React from "react";
import TPQKImage from "../Image/TPQKImage";
import { TrendingType } from "../../screens/home/Home";
import TPQKText from "../Text/TPQKText";
import TPQKIconButton from "../IconButton/TPQKIconButton";
interface ITPQKTreding {
  item: TrendingType;
}
const TPQKTrending = ({ item }: ITPQKTreding) => {
  return (
    <View>
      <TPQKImage url={item.img} styleImage={styles.styleImage} />
      <View style={styles.card}>
        <View style={styles.body}>
          <TPQKText text={item.name} styleText={styles.name} />
          <View style={styles.footer}>
            <View>
              <TPQKText text={"Time"} styleText={styles.timeText} />
              <TPQKText text={item.time} styleText={styles.time} />
            </View>
            <View style={styles.footerIcon}>
              <TPQKIconButton icon="md-bookmark-outline" color={"green"} />
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
    width: 160,
    height: 180,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    marginRight: 20,
  },
  styleImage: {
    marginTop: -40,
    width: 140,
    height: 110,
    top: 50,
    zIndex: 1,
    left: 8,
  },
  body: {
    flex: 1,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    textAlign: "center",
    color: "#484848",
    fontWeight: "bold",
    marginTop: 50,
  },
  timeText: {
    color: "#A9A9A9",
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 2,
  },
  time: {
    fontSize: 14,
    color: "#484848",
    fontWeight: "bold",
  },
  footer: {
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footerIcon: {
    borderRadius: 10,
    width: 25,
    height: 25,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TPQKTrending;
