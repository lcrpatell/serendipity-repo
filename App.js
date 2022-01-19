import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar />
    </SafeAreaProvider>
  );
}

/*
adding props to a screen
using render callback
<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>


stting options--Screen accepts options prop
to use consistent options across stack:

<Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'My home' ,
        headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}
      />
    </Stack.Navigator>

using params in options
<Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ route, (can use navigation too) }) => ({ title: route.params.name })}
/>

setting options from active screen

<Button
  title="Update the title"
  onPress={() => navigation.setOptions({ title: 'Updated!' })}
/>





*/

/*
navigating between screens 
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
*/

/*
navigation.push('RouteName') 
to pass unique data to each root

navigation.goBack('RouteName')
to go back

navigation.popToTop('RouteName')
go to first screen on stack
*/

/* passing params
navigation.navigate('RouteName', { params go here })
access params: route.params
JSON-serializable for state persistence and right contract for implementing deep linking

add route into parameters in declaration

updating params
navigation.setParams({
  params: 'someText'
})

initial params
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  initialParams={{ itemId: 42 }}
/>

*/

/*

passing params to a previous screen
React.useEffect(() => {
  if (route.params?.post) {
    // Post updated, do something with `route.params.post`
    // For example, send the post to the server
  }
}, [route.params?.post]);

on initial screen
in an onPress inline fucntion
 navigation.navigate({
  name: 'Home',
  params: { post: postText },
  merge: true,
})

*/

/* nesting navigators
navigation.navigate('Account', {
  screen: 'Settings',
  params: { user: 'jane' },
});


use minimal info to grab data from global store

*/

/*
multiple navigator nesting
headerShown: false
to hide header in a screen containing the navigator
put in options in Stack.Screen

groups of screens
<Stack.Group screenOptions={{}}>
</Stack.Group>
*/
