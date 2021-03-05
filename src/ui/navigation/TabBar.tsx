import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import MapScreen from '../screens/MapScreen';
import ContractScreen from '../screens/ContractScreen';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListContract" component={ContractScreen} />
      <Tab.Screen name="ListScreen" component={ListScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;
