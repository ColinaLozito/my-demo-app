import {Dimensions, Platform, NativeModules} from 'react-native';

// base device dimensions (iPhone 8 +)
const RMS = {
  WIDTH: '410',
  HEIGHT: '730',
};
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

// if device have phisical navigation menu option
const HARDWARE_OPTION_BAR =
  Platform.OS === 'android'
    ? NativeModules.DetectHardware.HAS_HARDWARE_MENU_BAR
    : null;

export default class Device {
  // get device width
  static width = WIDTH;
  // get device height
  static height = HEIGHT;
  // know if the device is android otherwise is ios
  static isAndroid = Platform.OS === 'android';
  // get scale device width based on device dimensions
  static scaleWidth = WIDTH / RMS.WIDTH;
  // get scale device height based on device dimensions
  static scaleHeight = HEIGHT / RMS.HEIGHT;
  // return bool value when device have physical nav bar
  static hasHardwareOptionBar = HARDWARE_OPTION_BAR;
  // get os version
  static osVersion = Platform.Version;
}
