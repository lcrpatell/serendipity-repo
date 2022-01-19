import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProfileCard from "../components/profileComps/profileCard";

import colors from "../constants/colors";

const SearchModal = (props) => {
  return (
    <View>
      <ProfileCard />
    </View>
  );
};

export default SearchModal;
