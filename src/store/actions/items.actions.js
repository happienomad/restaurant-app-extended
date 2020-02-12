import CONSTANTS from '../../constants';

export const fetchItemsInit = () => ({
	type: CONSTANTS.FETCH_ITEMS_INIT
});

export const fetchItemsSuccess = (items) => ({
	type: CONSTANTS.FETCH_ITEMS_SUCCESS,
	payload: items
});

export const fetchItemsFail = (error) => ({
	type: CONSTANTS.FETCH_MENU_FAIL,
	payload: error
});