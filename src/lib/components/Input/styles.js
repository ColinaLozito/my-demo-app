import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import Device from '../../../helpers/device';
import Fonts from '../../../styles/fonts';

const styles = StyleSheet.create({
  placeholderColor: {
    color: colors.midGrayOpacity,
  },
  textInput: {
    width: Device.scaleWidth * 300,
    height: Device.scaleHeight * 40,
    alignItems: 'center',
    paddingLeft: Device.scaleWidth * 20,
    backgroundColor: colors.white,
    borderRadius: Device.scaleWidth * 4,
    marginVertical: Device.scaleHeight * 15,
    ...Fonts.size12Light,
  },
});

export default styles;
