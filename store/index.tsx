import React, {Context, createContext, useReducer} from 'react';
import {globalState} from './types';
import appReducer from './appReducer';
import {Actions} from './actions';

const initialState: globalState = {
  userEmail: undefined,
  isLoggedIn: false,
  isOnline: false,
};
export const StateContext: Context<globalState> = createContext(initialState);

export const StateProvider: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function setUserEmail(email: string) {
    dispatch({
      type: Actions.SetUserEmail,
      payload: email,
    });
  }

  function setIsLoggedIn(isLoggedIn: boolean) {
    dispatch({
      type: Actions.SetIsLoggedIn,
      payload: isLoggedIn,
    });
  }

  function setIsOnline(isOnline: boolean) {
    dispatch({
      type: Actions.SetIsOnline,
      payload: isOnline,
    });
  }

  return (
    <StateContext.Provider
      value={{
        userEmail: state.userEmail,
        isLoggedIn: state.isLoggedIn,
        isOnline: state.isOnline,
        setUserEmail,
        setIsLoggedIn,
        setIsOnline,
      }}>
      {children}
    </StateContext.Provider>
  );
};
