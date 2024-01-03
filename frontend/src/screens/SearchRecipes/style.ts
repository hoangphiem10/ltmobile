import { StyleSheet } from "react-native";
export const SearchRecipeStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    // justifyContent: "center",
    // alignItems: "center",
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
  searchResults: {
    marginLeft: 30,
    marginBottom: 10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  searchResultText: {
    fontWeight:"bold",
    fontSize:18
  },
  totalResultText: {
    color:'gray',
    fontSize:14,
    marginRight:30
  },
  Filterbtn: {
    flexDirection:'row',
    width:78,
    height:30,
    marginLeft:18,
    borderRadius:10,
    marginTop:-120,
  }
});
