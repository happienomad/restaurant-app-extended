import React from 'react';
import { SectionsInitialState, SectionsReducer } from '../reducers/sections.reducer';

const SectionsContext = React.createContext([]);

const SectionsContextProvider = (props) => {
  const sectionsState = React.useReducer(SectionsReducer, SectionsInitialState);

  return (
    <SectionsContext.Provider value={sectionsState}>
      {props.children}
    </SectionsContext.Provider>
  )
}

export { SectionsContext, SectionsContextProvider };