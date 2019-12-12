import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import {connect} from 'easy-redux-helpers';
import PropTypes from 'prop-types';

import ListItem from '../../lib/components/ListItem';

const Tab2 = ({data}) => {
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <FlatList
        contentContainerStyle={styles.flatListStyles}
        data={data}
        keyExtractor={(item, key) => String(key)}
        renderItem={({item}) => {
          return (
            <ListItem
              key={item.key}
              name={item.name}
              price={item.price}
              blend={item.blend}
              productImage={item.productImage}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

ListItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array),
};

export default connect(Tab2).to({
  props: {
    data: 'state.data.data',
  },
});
