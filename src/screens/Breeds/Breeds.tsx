import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {IconButton} from '@react-native-material/core';
import {appColors} from '@/theme/appColors';
import {useActions} from './useActions';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {AuthContext} from '@/context/AuthContext';
import {SignOutIcon} from '@/assets/svg';

export const Breeds = () => {
  const {breedImage, isLoading, refetch} = useActions();
  const {handleSignOut} = AuthContext();

  return (
    <View flex backgroundColor={appColors.BACKGROUND_SCREEN_COLOR} padding-16>
      <View>
        <IconButton
          style={styles.signOutButton}
          icon={<SignOutIcon width={24} height={24} color={appColors.BLACK} />}
          onPress={handleSignOut}
        />
        <Text style={styles.title} center marginV-10>
          Dog breeds
        </Text>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
          bounces
          showsVerticalScrollIndicator={true}>
          <FastImage style={styles.imageBreed} source={{uri: breedImage}} />
          <Text style={styles.text} center color="black">
            Reload the page to change the image.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    top: 0,
    right: 0,
  },
  imageBreed: {
    width: '100%',
    height: 400,
    marginVertical: 20,
    borderRadius: 16,
    borderColor: 'transparent',
    padding: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: appColors.BLACK,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: appColors.BLACK,
  },
});
