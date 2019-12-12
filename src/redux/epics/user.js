import {Observable} from 'rxjs-compat';
import {flatMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {remove_user_information} from '../../redux/actions/user';
import {navigation_reset_to} from './navigation-helper';

export const remove_user_info = () => {
  return {
    type: 'REMOVE_USER_INFO',
  };
};

export const removeUserInfo = action$ =>
  action$.pipe(
    ofType('REMOVE_USER_INFO'),
    flatMap(() =>
      Observable.concat(
        Observable.of(remove_user_information()),
        Observable.of(navigation_reset_to('Login')),
      ),
    ),
  );
