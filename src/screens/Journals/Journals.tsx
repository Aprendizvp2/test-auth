import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {IconButton} from '@react-native-material/core';
import {appColors} from '@/theme/appColors';
import {SignOutIcon} from '@/assets/svg';
import {useActions} from './useActions';
import {JournalsEntity} from '@/api/journals/entities/journalsEntity';
import {setHiddenLoading, setShowLoading} from '@/slices/loadingSlice';
import {useAppDispatch} from '@/hooks/useRedux';
import {AuthContext} from '@/context/AuthContext';

export const Journals = () => {
  const {data, isLoading} = useActions();
  const dispatch = useAppDispatch();
  const {handleSignOut} = AuthContext();

  useEffect(() => {
    if (isLoading) {
      dispatch(setShowLoading());
    } else {
      dispatch(setHiddenLoading());
    }
  }, [isLoading, dispatch]);

  const renderItem = ({item}: {item: JournalsEntity}) => (
    <View style={styles.card}>
      <Text style={styles.titleItem}>
        Title: <Text style={styles.textItem}>{item.title}</Text>
      </Text>
      <Text style={styles.titleItem}>
        Publisher: <Text style={styles.textItem}>{item.publisher}</Text>
      </Text>
      <Text style={styles.titleItem}>
        Last check time:{' '}
        <Text style={styles.textItem}>{item.subjects.map(e => e.name)}</Text>
      </Text>
    </View>
  );

  return (
    <View backgroundColor={appColors.BACKGROUND_SCREEN_COLOR} padding-16>
      <IconButton
        style={styles.signOutButton}
        icon={<SignOutIcon width={24} height={24} color={appColors.BLACK} />}
        onPress={handleSignOut}
      />
      <Text style={styles.title}>List of journals</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}-${item.ISSN[0]}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    top: 0,
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 8,
  },
  card: {
    width: '100%',
    marginVertical: 16,
    padding: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: appColors.BLACK,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
  },
  titleItem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color: '#636363',
  },
});
