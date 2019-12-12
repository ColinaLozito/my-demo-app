import React from 'react';
import {View, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Input = ({
  lenght,
  value,
  onChange,
  editable,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View>
      <TextInput
        maxLength={lenght}
        value={value}
        onChangeText={onChange}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholderColor.color}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

Input.propTypes = {
  lenght: PropTypes.number,
  editable: PropTypes.bool,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  lenght: 40,
  secureTextEntry: false,
  editable: true,
  placeholder: 'Input some text',
};

export default Input;
