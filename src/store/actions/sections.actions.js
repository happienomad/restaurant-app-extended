import CONSTANTS from '../../constants';

export const fetchSectionsInit = () => ({
	type: CONSTANTS.FETCH_ITEMS_INIT
});

export const fetchSectionsSuccess = (sections) => ({
	type: CONSTANTS.FETCH_SECTIONS_SUCCESS,
	payload: sections
});

export const fetchSectionsFail = (error) => ({
	type: CONSTANTS.FETCH_SECTIONS_FAIL,
	payload: error
});