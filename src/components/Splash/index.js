import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import styles from './styles';

const BG = require('../../../assets/images/splash-bg.jpeg');

const Splash = () => (
  <SafeAreaView style={styles.splashWrapper}>
    <Image source={BG} style={styles.splashBackground} />
  </SafeAreaView>
);

export default Splash;
