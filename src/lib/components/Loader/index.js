import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.loadingText}>LOADING...</Text>
  </View>
);

export default Loader;
