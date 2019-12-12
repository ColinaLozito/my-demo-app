import Device from '../helpers/device';

const moderateScale = size => Device.scaleWidth * (size * 1.1);

// use in case of cuted chars
const lineHeight = value => Math.trunc(value * 1.4);

const fontStyle = {
  size12Light: {
    lineHeight: lineHeight(12),
    fontSize: moderateScale(12),
    fontWeight: '100',
  },
  size12Regular: {
    lineHeight: lineHeight(12),
    fontSize: moderateScale(12),
    fontWeight: '300',
  },
  size12Bold: {
    lineHeight: lineHeight(12),
    fontSize: moderateScale(12),
    fontWeight: '500',
  },
  size16Light: {
    lineHeight: lineHeight(16),
    fontSize: moderateScale(16),
    fontWeight: '100',
  },
  size16Regular: {
    lineHeight: lineHeight(16),
    fontSize: moderateScale(16),
    fontWeight: '300',
  },
  size16Bold: {
    lineHeight: lineHeight(16),
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  size18Light: {
    lineHeight: lineHeight(18),
    fontSize: moderateScale(18),
    fontWeight: '100',
  },
  size18Regular: {
    lineHeight: lineHeight(18),
    fontSize: moderateScale(18),
    fontWeight: '300',
  },
  size18Bold: {
    lineHeight: lineHeight(18),
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
  size22Regular: {
    lineHeight: lineHeight(22),
    fontSize: moderateScale(22),
    fontWeight: '300',
  },
  size40Bold: {
    lineHeight: lineHeight(40),
    fontSize: moderateScale(40),
    fontWeight: '500',
    fontFamily: 'American Typewriter',
  },
};

export default fontStyle;
