import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import ReduxNavigator from './app/redux-navigator';
import configureStore from './redux/configure-store';
import Splash from './components/Splash';

const store = configureStore();

class RootComponent extends Component {
  static mainNav = {};

  static setMainNav(mainNav) {
    RootComponent.mainNav = mainNav;
  }

  constructor(props) {
    super(props);
    this.state = {
      showSplash: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSplash: false,
      });
    }, 3000);
  }

  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          {this.state.showSplash ? <Splash /> : <ReduxNavigator />}
        </PersistGate>
      </Provider>
    );
  }
}

export default RootComponent;
