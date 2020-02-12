import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sections from './Sections';
import Items from './Items';
import { MenuContextProvider } from '../store/providers/menu.context';
import { ItemsContextProvider } from '../store/providers/items.context';

const Grid = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Sections />
      </Route>
      <Route path="/sections/:id" exact>
        <ItemsContextProvider>
          <Items />
        </ItemsContextProvider>
      </Route>
    </Switch>
  )
}

export default Grid