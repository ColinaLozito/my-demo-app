import React, {Component} from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {connect} from 'easy-redux-helpers';

import styles from './styles';
import Input from '../../lib/components/Input';
import Button from '../../lib/components/Button';
import {start_login_flow} from '../../redux/epics/login';

const BG = require('../../../assets/images/bg.jpeg');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      disable: true,
    };
  }

  buttonSwitcher = () => {
    if (this.state.user.length > 5 && this.state.pass.length > 5) {
      return false;
    }
    return true;
  };

  changeUserValue = value => {
    this.setState({
      user: value,
    });
  };

  changePassValue = value => {
    this.setState({
      pass: value,
    });
  };

  submitLoginInfo = () => {
    this.props.actions.start_login_flow(
      this.state.user,
      this.props.navigation.navigate,
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.loginWrapper}>
        <Image source={BG} style={styles.background} />
        <View style={styles.loginOpacityBG}>
          <View style={styles.loginContainer}>
            <Text style={styles.loginTitle}>Login</Text>
            <Input
              value={this.state.user}
              onChange={this.changeUserValue}
              placeholder="Enter your user name"
            />
            <Input
              type="password"
              value={this.state.pass}
              onChange={this.changePassValue}
              placeholder="Enter your pass"
              secureTextEntry={true}
            />
            <Button
              label="SUBMIT"
              onPress={this.submitLoginInfo}
              disabled={this.buttonSwitcher()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default connect(Login).to({
  actions: {
    start_login_flow: (user, navigation) => start_login_flow(user, navigation),
  },
});
