import {NavigationActions, StackActions} from 'react-navigation';

export default routeName =>
  StackActions.reset({
    index: 0,
    key: undefined,
    actions: [NavigationActions.navigate({routeName})],
  });
