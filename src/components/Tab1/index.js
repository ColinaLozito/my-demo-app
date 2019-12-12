import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';
import Main from '../Main';

const Tab1 = () => {
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <Main />
    </SafeAreaView>
  );
};

export default Tab1;
