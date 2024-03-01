import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {enableScreens} from 'react-native-screens';
import {TabsHomeParamList, TabsHomeRoutes} from '@/types/tabRoutes';
import {Breeds, Newspaper, Journals} from '@/screens';
import {CustomTabBar} from './CustomTabBar';
import {Exchange} from '@/screens/Exchange';

const Tabs = createBottomTabNavigator<TabsHomeParamList>();
enableScreens();

export function TabsNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tabs.Screen name={TabsHomeRoutes.BREEDS} component={Breeds} />
      <Tabs.Screen name={TabsHomeRoutes.NEWSPAPER} component={Newspaper} />
      <Tabs.Screen name={TabsHomeRoutes.JOURNALS} component={Journals} />
      <Tabs.Screen name={TabsHomeRoutes.EXCHANGE} component={Exchange} />
    </Tabs.Navigator>
  );
}
