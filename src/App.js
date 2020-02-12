import React from 'react';
import Header from './containers/Header';
import Grid from './containers/Grid';
import { BrowserRouter as Router } from 'react-router-dom';
import { SectionsContextProvider } from './store/providers/sections.context';
import { MenuContextProvider } from './store/providers/menu.context';
import { ItemsContextProvider } from './store/providers/items.context';

const App = () => {
  return (
    <SectionsContextProvider>
      <MenuContextProvider>
        <Router>
          <Header />
          <Grid />
        </Router>
      </MenuContextProvider>
    </SectionsContextProvider>
  );
}

export default App;