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

const ProfileCard = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.picture}></View>
        <View style={styles.rowContainer}>
          <View style={{ ...styles.rowItem, ...{ marginRight: 7.5 } }}>
            <Text style={styles.header}>Skills</Text>
          </View>
          <View style={{ ...styles.rowItem, ...{ marginLeft: 7.5 } }}>
            <Text style={styles.header}>Interests</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.header}>Contact Info</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 300,
    width: "80%",
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-evenly",
  },
  rowItem: {
    flex: 1,
    height: 300,
    backgroundColor: "white",
    borderRadius: 10,
  },
  picture: {
    height: 100,
    width: 100,
    backgroundColor: colors.primary,
    margin: 15,
    borderRadius: 100,
    overflow: "hidden",
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.primary,
    paddingVertical: 15,
  },
});

export default ProfileCard;
