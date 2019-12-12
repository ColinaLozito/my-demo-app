import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import fonts from '../../../styles/fonts';
import Device from '../../../helpers/device';
import button from './styles';

const TYPE = {
  ACTIVE: 'active',
  DELETE: 'delete',
  TRANSPARENT: 'transparent',
  WITH_BLACK: 'with_black',
};

class Button extends Component {
  constructor(props) {
    super(props);
    this.buttonProperties = {
      buttonStyle: button.active,
      textStyle: button.activeText,
    };
  }

  renderButtonWithSpecificProperties() {
    const {
      props: {
        onPress,
        disabled,
        width,
        height,
        style,
        fontStyle,
        label,
        children,
      },
      buttonProperties: {buttonStyle, textStyle},
    } = this;
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[
          button.buttonDimensions(width, height),
          button.basicApperence,
          buttonStyle,
          disabled ? button.disableButton : button.activeButton,
          style,
        ]}>
        <Text
          numberOfLines={1}
          style={[fonts.size16Bold, textStyle, fontStyle]}>
          {label}
        </Text>
        {children && <View style={button.children}>{children}</View>}
      </TouchableOpacity>
    );
  }

  renderButton() {
    const {type} = this.props;

    if (type === TYPE.ACTIVE) {
      this.buttonProperties = {
        buttonStyle: button.active,
        textStyle: button.activeText,
      };
    }

    if (type === TYPE.DANGER) {
      this.buttonProperties = {
        buttonStyle: button.danger,
        textStyle: button.activeText,
      };
    }

    if (type === TYPE.DELETE) {
      this.buttonProperties = {
        buttonStyle: button.delete,
        textStyle: button.deleteText,
      };
    }

    if (type === TYPE.WITH_BLACK) {
      this.buttonProperties = {
        buttonStyle: button.transparent,
        textStyle: button.blackText,
      };
    }

    if (type === TYPE.TRANSPARENT) {
      this.buttonProperties = {
        buttonStyle: button.transparent,
        textStyle: button.transparentText,
      };
    }

    return this.renderButtonWithSpecificProperties();
  }

  render() {
    return <View>{this.renderButton()}</View>;
  }
}

Button.propTypes = {
  onPress: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  children: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fontStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  onPress: () => {},
  children: undefined,
  type: TYPE.ACTIVE,
  disabled: false,
  width: Device.width * 0.8,
  height: 40,
  style: {},
  fontStyle: {},
};

export default Button;
