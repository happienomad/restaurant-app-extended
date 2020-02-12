import React from 'react';
import { ItemsInitialState, ItemReducer } from '../reducers/items.reducer';

const ItemsContext = React.createContext([]);

const ItemsContextProvider = (props) => {
	const useItemsState = React.useReducer(ItemReducer, ItemsInitialState);

	return (
		<ItemsContext.Provider value={useItemsState}>
			{props.children}
		</ItemsContext.Provider>
	)
}

export { ItemsContext, ItemsContextProvider };