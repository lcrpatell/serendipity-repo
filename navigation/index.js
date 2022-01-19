import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

import SettingsScreen from "../screens/SettingsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LoginScreen from "../screens/LoginScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Settings } from "react-native";
import SearchModal from "../screens/SearchModal";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          color: colors.primary,
          fontSize: 24,
        },
      }}
    >
      {/*auth screens: TBC*/}
      <Stack.Group screenOptions={{ headerShown: false }}></Stack.Group>

      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      {/*all screens that are to be above tabs*/}
      <Stack.Screen name="ProfileModal" component={ProfileScreen} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="SearchModal" component={SearchModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Search") {
            iconName = "search";
          } else if (route.name == "Profile") {
            iconName = "person";
          } else {
            iconName = "archive";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontWeight: "bold",
          color: colors.primary,
          fontSize: 24,
        },
      })}
    >
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
      <BottomTab.Screen name="Contacts" component={ContactsScreen} />
    </BottomTab.Navigator>
  );
}
