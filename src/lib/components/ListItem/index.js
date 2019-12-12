import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import RoundedImage from '../RoundedImage';
import PropTypes from 'prop-types';

const ListItem = ({name, price, blend, productImage}) => (
  <View style={styles.itemWrapper}>
    <View style={styles.imageWrapper}>
      <RoundedImage imageUrl={productImage} />
    </View>
    <View style={styles.contentWrapper}>
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.blendStyle}>{`Blend type: ${blend}`}</Text>
      <Text style={styles.priceStyle}>{`Price: ${price}`}</Text>
    </View>
  </View>
);

ListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  blend: PropTypes.string,
  productImage: PropTypes.string,
};

ListItem.defaultProps = {
  name: 'ITEM',
  price: '3.99',
  blend: 'SOFT',
  productImage: '',
};

export default ListItem;
