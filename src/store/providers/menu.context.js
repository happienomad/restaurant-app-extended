import React from 'react';
import { MenuInitialState, MenuReducer } from '../reducers/menu.reducer';

const MenuContext = React.createContext([]);

const MenuContextProvider = (props) => {
  const useMenuState = React.useReducer(MenuReducer, MenuInitialState);

  return (
    <MenuContext.Provider value={useMenuState}>
      {props.children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuContextProvider };