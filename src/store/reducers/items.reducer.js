import CONSTANTS from '../../constants';

const ItemsInitialState = [];

const ItemReducer = (state, action) => {
	switch (action.type) {
		case CONSTANTS.FETCH_ITEMS_SUCCESS:
			return state.concat(action.payload);
		default:
			return ItemsInitialState;
	}
}

export { ItemsInitialState, ItemReducer };