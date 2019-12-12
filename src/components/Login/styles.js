import {StyleSheet} from 'react-native';
import colors from '../..//styles/colors';
import fonts from '../..//styles/fonts';
import Device from '../../helpers/device';

const styles = StyleSheet.create({
  loginWrapper: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainColor,
  },
  loginContainer: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparent,
  },
  loginOpacityBG: {
    top: 0,
    width: Device.width,
    height: Device.height + 30,
    position: 'relative',
    zIndex: 2,
    backgroundColor: colors.blackLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: Device.width,
    height: Device.height,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 1,
  },
  loginTitle: {
    ...fonts.size40Bold,
    color: colors.white,
    marginBottom: Device.scaleWidth * 100,
  },
});

export default styles;
