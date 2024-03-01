import React from 'react';
import {TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {TabsHomeRoutes} from '@/types/tabRoutes';

import Animated from 'react-native-reanimated';
import {appColors} from '@/theme/appColors';
import {NewspaperIcon, TradeIcon, JournalsIcon, PetsIcon} from '@/assets/svg';

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: {
  state?: any;
  descriptors?: any;
  navigation?: any;
}) {
  const getIcon = (key: string, focus: boolean) => {
    switch (key) {
      case TabsHomeRoutes.BREEDS:
        return focus ? (
          <PetsIcon color={appColors.BLACK} />
        ) : (
          <PetsIcon color={appColors.GRAY_05} />
        );
      case TabsHomeRoutes.NEWSPAPER:
        return focus ? (
          <NewspaperIcon color={appColors.BLACK} />
        ) : (
          <NewspaperIcon color={appColors.GRAY_05} />
        );
      case TabsHomeRoutes.JOURNALS:
        return focus ? (
          <JournalsIcon color={appColors.BLACK} />
        ) : (
          <JournalsIcon color={appColors.GRAY_05} />
        );
      case TabsHomeRoutes.EXCHANGE:
        return focus ? <TradeIcon /> : <TradeIcon color={appColors.GRAY_05} />;
    }
  };

  return (
    <Animated.View style={[styles.container]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.item}
            key={index}>
            {getIcon(route?.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: appColors.WHITE,
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 32 : 16,
    elevation: 3,
    borderRadius: 34,
    shadowColor: '#00000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    flexDirection: 'row',
    height: 68,
    width: '95%',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
