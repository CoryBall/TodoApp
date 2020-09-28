import {Actions} from './actions';
import {globalState} from './types';

export default (state: globalState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case Actions.SetUserEmail:
      return {
        ...state,
        userEmail: action.payload,
      };

    case Actions.SetIsLoggedIn:
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    case Actions.SetIsOnline:
      return {
        ...state,
        isOnline: action.payload,
      };

    default:
      return state;
  }
};
