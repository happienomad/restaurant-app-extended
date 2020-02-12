import CONSTANTS from '../../constants';

const SectionsInitialState = {
  isFetching: false,
  sections: []
}

const SectionsReducer = (state, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_SECTIONS_INIT:
      return { ...state, isFetching: true };
    case CONSTANTS.FETCH_SECTIONS_SUCCESS:
      return { ...state, isFetching: false, sections: action.payload };
    default:
      return state;
  }
}

export { SectionsInitialState, SectionsReducer };