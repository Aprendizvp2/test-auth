import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';
import {RootStackParamList, RootStackRoutes} from '@/types/stackRoutes';
import {TabsNavigation} from './tabsNavigation';
import {Login} from '@/screens';

enableScreens();
const RootStack = createStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <RootStack.Navigator
      initialRouteName={RootStackRoutes.LOGIN}
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={RootStackRoutes.LOGIN} component={Login} />
      <RootStack.Screen
        name={RootStackRoutes.TABS_HOME}
        component={TabsNavigation}
      />
    </RootStack.Navigator>
  );
}
