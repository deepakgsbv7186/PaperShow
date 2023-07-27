import {StatusBar} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Login,
  Profile,
  RickandMorty,
  Signup,
  TestLib,
} from './src/screens';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} />
        <Stack.Navigator
          initialRouteName="RickandMorty"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="TestLib" component={TestLib} />
          <Stack.Screen name="RickandMorty" component={RickandMorty} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
