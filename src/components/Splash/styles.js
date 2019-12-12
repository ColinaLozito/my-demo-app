import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import Device from '../../helpers/device';

const styles = StyleSheet.create({
  splashWrapper: {
    height: '100%',
    width: '100%',
  },
  apptitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.transparent,
    position: 'relative',
    zIndex: 2,
  },
  splashTitle: {
    ...fonts.size40Bold,
    color: colors.whiteGray,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  splashBackground: {
    width: Device.width,
    height: Device.height,
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 1,
  },
  footer: {
    width: '100%',
    height: Device.scaleHeight * 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Device.scaleHeight * 20,
    zIndex: 3,
  },
});

export default styles;
