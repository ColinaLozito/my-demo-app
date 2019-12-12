import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import Device from '../../../helpers/device';
import Fonts from '../../../styles/fonts';

const styles = StyleSheet.create({
  logoutWrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Device.scaleWidth * 20,
  },
  logOut: {
    color: colors.red,
    ...Fonts.size16Bold,
  },
});

export default styles;
