import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackNavigation} from './navigation/stackNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Loading} from './components';

const App = () => {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <NavigationContainer>
        <Loading />
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default App;
