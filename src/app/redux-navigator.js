import React, {Component} from 'react';
import {AppState} from 'react-native';
import PropTypes from 'prop-types';
import RootComponent from '../root-component';

import {start_initial_app_flow} from '../redux/epics/start-app';
import {connect} from 'easy-redux-helpers';

// import App from '~/src/lib/app';
import RootNavigation from './root-navigation';

class ReduxNavigator extends Component {
  constructor() {
    super();
    this.appState = AppState.currentState;
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  render() {
    return (
      <RootNavigation
        ref={navigator => {
          RootComponent.setMainNav(navigator);
          this.props.actions.start_initial_app_flow(navigator);
        }}
      />
    );
  }
}

ReduxNavigator.propTypes = {
  actions: PropTypes.shape({
    start_initial_app_flow: PropTypes.func.isRequired,
  }).isRequired,
};

ReduxNavigator.defaultProps = {
  token: undefined,
};

export default connect(ReduxNavigator).to({
  actions: {
    start_initial_app_flow,
  },
});
