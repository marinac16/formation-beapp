/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Props } from "react";
import {Provider} from 'react-redux';
import store from './redux/store';
import EStyleSheet from 'react-native-extended-stylesheet';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './ui/navigation/RootStackParamList';
import {NavigationContainer} from '@react-navigation/native';
import TabBar from './ui/navigation/TabBar';
import {Button} from 'react-native';
import DetailsScreen from './ui/screens/DetailsScreen';
import SearchScreen from './ui/screens/SearchScreen';

const RootStack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabBar"
          component={TabBar}
          options={({route, navigation}) => ({
            title: 'Stations',
            headerRight: () => (
              <Button
                title="Search"
                onPress={() => {
                  navigation.navigate('SearchScreen');
                }}
              />
            ),
          })}
        />
        <RootStack.Screen name="DetailsScreen" component={DetailsScreen} />
        <RootStack.Screen name="SearchScreen" component={SearchScreen} />
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

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8',
});

export default App;


