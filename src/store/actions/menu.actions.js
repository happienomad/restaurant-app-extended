import CONSTANTS from '../../constants';

export const fetchMenuItemsInit = () => ({
	type: CONSTANTS.FETCH_MENU_INIT
});

export const fetchMenuItemsSuccess = (menuItems) => ({
	type: CONSTANTS.FETCH_MENU_SUCCESS,
	payload: menuItems
});

export const fetchMenuItemsFail = (error) => ({
	type: CONSTANTS.FETCH_MENU_FAIL,
	payload: error
});