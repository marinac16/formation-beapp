/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './ui/navigation/RootStackParamList';
import store from './redux/store';
import HomeScreen from './ui/screens/ListScreen';
import DetailsScreen from './ui/screens/DetailsScreen';
import TabBar from './ui/navigation/TabBar';

// declare const global: {HermesInternal: null | {}};

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabBar"
          component={TabBar}
          options={{title: 'Stations'}}
        />
        <RootStack.Screen name="DetailsScreen" component={DetailsScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
