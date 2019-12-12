import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import Device from '../../../helpers/device';

export default StyleSheet.create({
  containerButton: {
    height: '100%',
    width: Device.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicApperence: {
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  textButton: {
    color: colors.white,
    textAlign: 'center',
    backgroundColor: colors.transparent,
  },
  disableButton: {
    backgroundColor: colors.regularLightGray,
  },
  active: {
    backgroundColor: colors.green,
  },
  danger: {
    backgroundColor: colors.red,
  },
  delete: {
    backgroundColor: colors.red,
  },
  transparent: {
    backgroundColor: colors.transparent,
  },
  activeText: {
    color: colors.white,
    paddingHorizontal: Device.scaleWidth * 20,
  },
  deleteText: {
    color: colors.white,
    paddingHorizontal: Device.scaleWidth * 20,
  },
  transparentText: {
    color: colors.mainColor,
    paddingHorizontal: Device.scaleWidth * 20,
  },
  blackText: {
    color: colors.darkGray,
    paddingHorizontal: Device.scaleWidth * 20,
  },
  children: {
    paddingRight: Device.scaleWidth * 20,
  },
  buttonDimensions: (width, height) => ({
    width: Device.scaleWidth * width,
    height: Device.scaleWidth * height,
  }),
});
