import React, { useEffect } from 'react';

import { getApiData } from '../../services/api.service';
import { MenuContext } from '../providers/menu.context';
import { SectionsContext } from '../providers/sections.context';
import * as actions from '../actions/menu.actions';

const useSectionsState = () => {
  const sectionsSlice = React.useContext(SectionsContext)[0];
  const [state, dispatch] = React.useContext(MenuContext);

  const fetchMenu = () => {
    if (!state.menu.length) {
      dispatch(actions.fetchMenuItemsInit());
      getApiData('/api/menu').then(response => {
        const menuItems = response.options.flatMap(menuItem => {
          return sectionsSlice.sections.filter(section => section._id === menuItem._ref);
        });
        dispatch(actions.fetchMenuItemsSuccess(menuItems));
      }).catch(e => console.log('error in api::', e));
    }
  }

  return { state, fetchMenu };
}

export default useSectionsState;