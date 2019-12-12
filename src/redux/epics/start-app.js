import {Observable} from 'rxjs-compat';
import {ofType} from 'redux-observable';
import {flatMap} from 'rxjs/operators';
import {navigation_reset_to} from './navigation-helper';

export const start_initial_app_flow = () => ({
  type: 'START_INITIAL_APP_FLOW',
});

export const startApp = (action$, state$) =>
  action$.pipe(
    ofType('START_INITIAL_APP_FLOW'),
    flatMap(() => {
      const {user} = state$.value;
      if (!user.token) {
        return Observable.of(navigation_reset_to('Login'));
      }
      return Observable.of(navigation_reset_to('Tabbar'));
    }),
  );
