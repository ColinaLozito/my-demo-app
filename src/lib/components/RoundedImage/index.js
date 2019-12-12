import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const RoundedImage = ({imageUrl}) => {
  return <Image source={{uri: imageUrl}} style={styles.rounded} />;
};

RoundedImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default RoundedImage;
