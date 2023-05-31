import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';
import 'react-native-gesture-handler';

const App = ()=> {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}

export default App
