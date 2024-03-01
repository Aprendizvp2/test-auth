import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {IconButton} from '@react-native-material/core';
import {appColors} from '@/theme/appColors';
import {SignOutIcon} from '@/assets/svg';
import {useActions} from './useActions';
import {ExchangeEntity} from '@/api/exchange/entities/exchangeEntity';
import {setHiddenLoading, setShowLoading} from '@/slices/loadingSlice';
import {useAppDispatch} from '@/hooks/useRedux';
import {AuthContext} from '@/context/AuthContext';

export const Exchange = () => {
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

  const renderItem = ({item}: {item: ExchangeEntity}) => (
    <View style={styles.card}>
      <Text style={styles.titleItem}>
        Ask price: <Text style={styles.textItem}>{item.askPrice}</Text>
      </Text>
      <Text style={styles.titleItem}>
        Open price: <Text style={styles.textItem}>{item.openPrice}</Text>
      </Text>
      <Text style={styles.titleItem}>
        Last price: <Text style={styles.textItem}>{item.lastPrice}</Text>
      </Text>
      <Text style={styles.titleItem}>
        Low price: <Text style={styles.textItem}>{item.lowPrice}</Text>
      </Text>
      <Text style={styles.titleItem}>
        High price: <Text style={styles.textItem}>{item.highPrice}</Text>
      </Text>
      <Text style={styles.titleItem}>
        Low price: <Text style={styles.textItem}>{item.quoteAsset}</Text>
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
      <Text style={styles.title}>Exchanges</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.symbol}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signOutButton: {
    position: 'absolute',
    top: 10,
    right: 20,
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
    borderRadius: 16,
    padding: 10,
    borderWidth: 1,
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
