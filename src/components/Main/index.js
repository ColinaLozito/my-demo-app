import React from 'react';
import {SafeAreaView, Text, Image} from 'react-native';
import {start_user_data_flow} from '../../redux/epics/user';
import styles from './styles';
import {connect} from 'easy-redux-helpers';

const COFFEE = require('../../../assets/images/coffee.jpg');

const Main = props => {
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <Image source={COFFEE} style={styles.mainImage} />
      <Text style={styles.hiStranger}>{`Hi ${props.user.name} !`}</Text>
      <Text style={styles.title}>Do you like Coffee ?</Text>
      <Text style={styles.content}>Switch to the other Tab !</Text>
    </SafeAreaView>
  );
};

export default connect(Main).to({
  props: {
    user: 'state.user',
  },
  actions: {
    start_user_data_flow: () => start_user_data_flow(),
  },
});
