import types from "../constants/action-types";

const initialState = {
  items: []
};

function rootReducer(state = initialState, action) {
switch(action.type) {
    case types.FETCH_BOOK_RESULTS: {
    return {
        items: action.payload.books,
    }
    }
    case types.FETCH_USER_RESULTS: {
    return {
        items: action.payload.users,
    }
    }
    default: return state;
  }
}

export default rootReducer;
