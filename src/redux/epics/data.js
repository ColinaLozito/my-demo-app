import {Observable} from 'rxjs-compat';
import {NavigationActions} from 'react-navigation';
import {flatMap, tap, catchError} from 'rxjs/operators';
import {ofType} from 'redux-observable';
import {navigation_back} from './navigation-helper';
import {navigation_reset_to} from './navigation-helper';
import {receive_data} from '../actions/data';
import RootComponent from '../../root-component';
import GraphqlRepository from '../../repositories/graphql-repository';

export const fetch_graphql_list_data = () => ({
  type: 'FETCH_GRAPHQL_LIST_DATA',
});

export const fetchGraphqlListData = action$ =>
  action$.pipe(
    ofType('FETCH_GRAPHQL_LIST_DATA'),
    tap(() => {
      RootComponent.mainNav.dispatch(
        NavigationActions.navigate({routeName: 'Loader'}),
      );
    }),
    flatMap(() => {
      return Observable.from(GraphqlRepository.simpleList()).pipe(
        flatMap(({data: {coffee: {beans}}}) =>
          Observable.concat(
            Observable.of(navigation_reset_to('Tabbar')),
            Observable.of(receive_data({data: beans})),
          ),
        ),
        catchError(() => Observable.of(navigation_back())),
      );
    }),
  );
