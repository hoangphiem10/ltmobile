import { StyleSheet } from "react-native";
export const HomeStyles = StyleSheet.create({
  constainer: {
    width: "100%",
  },
  headerTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  headerDesc: {
    fontSize: 10,
    fontWeight: "200",
  },
  styleInput: {
    padding: 2,
  },
  headerAvatar: {
    height: 40,
    width: 40,
    overflow: "hidden",
    borderColor: "#129575",
    borderWidth: 2,
    borderRadius: 12,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 78,
    marginTop: 20,
  },
  searchBtn: {
    width: 40,
    height: 35,
    backgroundColor: "#129575",
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
});
