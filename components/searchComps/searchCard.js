import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import colors from "../../constants/colors";

const SearchCard = (props) => {
  return (
    <TouchableOpacity style={styles.rowContainer} onPress={props.onSelect}>
      <View style={styles.picture}></View>
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    // marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 15,
  },
  picture: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    borderRadius: 50,
    overflow: "hidden",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    marginHorizontal: 15,
  },
  //   item: {
  //     flex: 1,
  //     height: 100,
  //     width: "80%",
  //     backgroundColor: "white",
  //     margin: 15,
  //     borderRadius: 10,
  //   },

  //   rowItem: {
  //     width: "30%",
  //     borderColor: colors.primary,
  //     borderRadius: 15,
  //     borderWidth: 1,
  //   },

  //   container: {
  //     flex: 1,
  //     backgroundColor: "white",
  //     marginHorizontal: 15,
  //     marginTop: 15,
  //     borderColor: "black",
  //     // borderWidth: 1,
  //     borderRadius: 15,
  //   },
  //   scrollContainer: {
  //     alignItems: "center",
  //   },

  //   header: {
  //     fontSize: 20,
  //     fontWeight: "normal",
  //     textAlign: "center",
  //     color: colors.primary,
  //     paddingVertical: 15,
  //   },
});

export default SearchCard;
