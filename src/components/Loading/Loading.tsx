import React from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

import {Text} from '@react-native-material/core';
import {useAppSelector} from '@/hooks/useRedux';
import {selectLoading} from '@/slices/loadingSlice';

export const Loading = () => {
  const {visible} = useAppSelector(selectLoading);

  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <ActivityIndicator size={40} color="#000" />
        <Text variant="overline" style={styles.loadingText}>
          Cargando
        </Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginVertical: 6,
    color: '#000',
  },
});
