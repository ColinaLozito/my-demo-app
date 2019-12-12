import {combineEpics} from 'redux-observable';
import {startLoginFlow} from './login';
import {startApp} from './start-app';
import {removeUserInfo} from './user';
import {navigateBack, navigateTo, navigationResetTo} from './navigation-helper';
import {fetchGraphqlListData} from './data';

const rootEpic = combineEpics(
  startLoginFlow,
  navigateBack,
  navigateTo,
  navigationResetTo,
  startApp,
  removeUserInfo,
  fetchGraphqlListData,
);

export default rootEpic;
