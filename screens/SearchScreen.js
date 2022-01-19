import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import ContactCard from "../components/contactComps/contactCard";
import SearchCard from "../components/searchComps/searchCard";
import colors from "../constants/colors";

const SearchScreen = (props) => {
  const data = [
    {
      id: "1",
      name: "Anita Avramides",
    },
    {
      id: "2",
      name: "Matt Parrot",
    },
    {
      id: "3",
      name: "Louise Hansen",
    },
    {
      id: "4",
      name: "Manuel Dries",
    },
    {
      id: "1",
      name: "Anita Avramides",
    },
    {
      id: "2",
      name: "Matt Parrot",
    },
    {
      id: "3",
      name: "Louise Hansen",
    },
    {
      id: "4",
      name: "Manuel Dries",
    },
    {
      id: "1",
      name: "Anita Avramides",
    },
    {
      id: "2",
      name: "Matt Parrot",
    },
    {
      id: "3",
      name: "Louise Hansen",
    },
    {
      id: "4",
      name: "Manuel Dries",
    },
  ];

  const renderContactItem = (itemData) => {
    return (
      // <SearchBar/>

      <SearchCard
        name={itemData.item.name}
        onSelect={() => {
          props.navigation.navigate("SearchModal");
        }}
      />
      // <MealItem
      //   title={itemData.item.title}
      //   duration={itemData.item.duration}
      //   complexity={itemData.item.complexity}
      //   affordability={itemData.item.affordability}
      //   image={itemData.item.imageurl}
      //   onSelect={() => {
      //     props.navigation.navigate({
      //       routeName: "MealDetail",
      //       params: {
      //         mealId: itemData.item.id,
      //         mealTitle: itemData.item.title,
      //         isFav: isFavorite,
      //       },
      //     });
      //   }}
      // />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={renderContactItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
