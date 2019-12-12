import {StyleSheet} from 'react-native';
import Device from '../../../helpers/device';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  rounded: {
    width: Device.scaleWidth * 100,
    height: Device.scaleWidth * 100,
    borderRadius: (Device.scaleWidth * 200) / 2,
    overflow: 'hidden',
    resizeMode: 'contain',
    shadowColor: colors.black,
    shadowOffset: {width: 1, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});

export default styles;
