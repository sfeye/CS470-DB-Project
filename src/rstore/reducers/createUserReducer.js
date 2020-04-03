import types from "../constants/action-types";

const initialState = {
  create: false,
  isbn: ""
};

function rootReducer(state = initialState, action) {
switch(action.type) {
    case types.CREATE_USER: {
        return {
        create: true,
        isbn: action.payload.isbn
        }
    }
    case types.USER_CREATED: {
      return {
      create: false,
      isbn: ""
      }
  }
    default: return state;
  }
}

export default rootReducer;
