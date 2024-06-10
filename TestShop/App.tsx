/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/Navigations/AppStack';

// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
