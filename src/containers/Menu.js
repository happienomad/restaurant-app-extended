import React from 'react';
import MenuItem from '../components/MenuItem';
import useSectionState from '../store/hooks/useSectionState';
import { SectionsContext } from '../store/providers/sections.context';
import { getApiData } from '../services/api.service';
import * as actions from '../store/actions/sections.actions';
import { MenuContext } from '../store/providers/menu.context';

const Menu = () => {
  const [sectionsSlice, dispatch] = React.useContext(SectionsContext);
  const { state, fetchMenu } = useSectionState();

  React.useEffect(() => {
    let isFetching = true;
    dispatch(actions.fetchSectionsInit());
    getApiData('/api/sections').then(response => {
      if (isFetching) {
        dispatch(actions.fetchSectionsSuccess(response));
      }
    });

    return () => isFetching = false
  }, [dispatch]);

  React.useEffect(() => {
    if (sectionsSlice.sections.length) {
      fetchMenu();
    }
  }, [sectionsSlice]);

  return (
    state.menu.map(menu => <MenuItem key={menu._id} link={`/sections/${menu._id}`} name={menu.name.en} image={menu.carouselImage.asset._ref} />)
  )
}

export default Menu;