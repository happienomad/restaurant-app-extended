import CONSTANTS from '../../constants';

const MenuInitialState = {
  isFetching: false,
  menu: []
};

const MenuReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_MENU_INIT:
      return { ...state, isFetching: false };
    case CONSTANTS.FETCH_MENU_SUCCESS:
      return { ...state, isFetching: false, menu: action.payload }
    default:
      return state;
  }
}

export { MenuInitialState, MenuReducer };