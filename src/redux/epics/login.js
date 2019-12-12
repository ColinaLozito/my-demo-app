import {Observable} from 'rxjs-compat';
import {flatMap} from 'rxjs/operators';
import {ofType} from 'redux-observable';

import jwtFakerRepository from '../../repositories/jwt-faker-repository';
import {receive_user_information} from '../actions/user';
import {fetch_graphql_list_data} from './data';

export const start_login_flow = user => ({
  type: 'START_LOGIN_FLOW',
  payload: {
    user,
  },
});

export const startLoginFlow = action$ =>
  action$.pipe(
    ofType('START_LOGIN_FLOW'),
    flatMap(({payload: {user}}) => {
      return Observable.of(jwtFakerRepository.getJWT(user)).pipe(
        flatMap(response => {
          return Observable.concat(
            Observable.of(fetch_graphql_list_data()),
            Observable.of(receive_user_information(response)),
          );
        }),
      );
    }),
  );
