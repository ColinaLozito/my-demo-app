import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'easy-redux-helpers';
import {TouchableOpacity, Text} from 'react-native';
import {remove_user_info} from '../../../redux/epics/user';
import styles from './styles';

const HeaderRightOption = props => (
  <TouchableOpacity
    onPress={props.actions.remove_user_info}
    style={styles.logoutWrapper}>
    <Text style={styles.logOut}>LEAVE</Text>
  </TouchableOpacity>
);

HeaderRightOption.propTypes = {
  actions: PropTypes.shape({
    remove_user_info: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(HeaderRightOption).to({
  actions: {
    remove_user_info: () => remove_user_info(),
  },
});
