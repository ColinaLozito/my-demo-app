import {StyleSheet} from 'react-native';

import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import Device from '../../../helpers/device';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    height: '100%',
  },
  loadingText: {
    ...fonts.size18Bold,
  },
  loadingImage: {
    width: '100%',
    height: Device.scaleHeight * 200,
    resizeMode: 'contain',
  },
});

export default styles;
