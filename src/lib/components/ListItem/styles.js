import {StyleSheet} from 'react-native';
import Device from '../../../helpers/device';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  itemWrapper: {
    width: '96%',
    height: Device.scaleHeight * 150,
    flexDirection: 'row',
    marginBottom: Device.scaleHeight * 10,
    backgroundColor: colors.white,
  },
  imageWrapper: {
    height: '100%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    height: '100%',
    width: '70%',
    justifyContent: 'center',
    paddingLeft: Device.scaleWidth * 20,
  },
  nameStyle: {
    ...fonts.size16Regular,
    marginVertical: Device.scaleHeight * 2,
  },
  blendStyle: {
    ...fonts.size16Bold,
    marginVertical: Device.scaleHeight * 2,
  },
  priceStyle: {
    ...fonts.size12Bold,
    marginVertical: Device.scaleHeight * 2,
  },
});

export default styles;
