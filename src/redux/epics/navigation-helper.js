import RootComponent from '../../root-component';
import {NavigationActions} from 'react-navigation';
import resetNavigationTo from './reset-navigation-to';

// actions
export const navigation_back = () => ({type: 'NAVIGATION_BACK'});
export const navigation_reset_to = routeName => ({
  type: 'NAVIGATION_RESET_TO',
  routeName,
});

export const navigation_to = navAction => ({
  type: 'NAVIGATION_TO',
  navAction,
});

// epics
export const navigateBack = action$ =>
  action$
    .ofType('NAVIGATION_BACK')
    .do(() => {
      RootComponent.mainNav.dispatch({type: 'Navigation/BACK'});
    })
    .ignoreElements();

export const navigateTo = action$ =>
  action$
    .ofType('NAVIGATION_TO')
    .do(action =>
      RootComponent.mainNav.dispatch(
        NavigationActions.navigate(action.navAction),
      ),
    )
    .ignoreElements();

export const navigationResetTo = action$ =>
  action$
    .ofType('NAVIGATION_RESET_TO')
    .do(action =>
      RootComponent.mainNav.dispatch(resetNavigationTo(action.routeName)),
    )
    .ignoreElements();
