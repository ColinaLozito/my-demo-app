import {StyleSheet} from 'react-native';
import fonts from '../../styles/fonts';
import Device from '../../helpers/device';

const styles = StyleSheet.create({
  homeWrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  mainImage: {
    width: Device.scaleWidth * 200,
    height: Device.scaleWidth * 200,
    borderRadius: (Device.scaleWidth * 200) / 2,
    overflow: 'hidden',
  },
  hiStranger: {
    ...fonts.size16Regular,
    marginVertical: Device.scaleHeight * 20,
  },
  title: {
    ...fonts.size22Regular,
  },
  content: {
    ...fonts.size18Regular,
    marginVertical: Device.scaleHeight * 30,
  },
});

export default styles;
