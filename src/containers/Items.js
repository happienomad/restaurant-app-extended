import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { SectionsContext } from '../store/providers/sections.context';
import { ItemsContext } from '../store/providers/items.context';
import { getApiData } from '../services/api.service';
import * as actions from '../store/actions/items.actions';
import GridItem from '../components/GridItem';

const Items = (props) => {

  const [selectedItems, setSelectedItems] = React.useState([]);
  const routeParams = useRouteMatch('/sections/:id');
  const sectionsSlice = React.useContext(SectionsContext)[0];
  const [items, dispatch] = React.useContext(ItemsContext);

  useEffect(() => {
    let isFetching = true;
    dispatch(actions.fetchItemsInit());
    getApiData('/api/items').then(response => {
      if (isFetching) {
        dispatch(actions.fetchItemsSuccess(response));
      }
    });
    return () => isFetching = false;
  }, [dispatch]);

  useEffect(() => {
    setSelectedItems([]);
    const selectedItems = sectionsSlice.sections.filter(section => section._id === routeParams.params.id)
      .flatMap(section => section.options)
      .flatMap(selectedItem => items.filter(item => item._id === selectedItem._ref));
    setSelectedItems(selectedItems);
  }, [routeParams.params.id, items, sectionsSlice]);

  return (
    <div className="flex flex-row justify-center">
      <div className="grid flex flex-row flex-wrap">
        {
          items.length > 0 ?
            selectedItems.map(item => {
              return (
                <div key={item._id} className="grid-item flex flex-row justify-center">
                  <GridItem id={item._id} name={item.name.en} image={item.image.asset._ref} />
                </div>
              )
            })
            : <h1>Loading...</h1>
        }
      </div>
    </div>
  )
}

export default Items