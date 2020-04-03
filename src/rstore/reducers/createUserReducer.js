import types from "../constants/action-types";

const initialState = {
  create: false,
  items: []
};

function rootReducer(state = initialState, action) {
switch(action.type) {
    case types.CREATE_USER: {
        return {
        create: true,
        items: action.payload.values
        }
    }
    case types.USER_CREATED: {
      return {
      create: false,
      items: []
      }
  }
    default: return state;
  }
}

export default rootReducer;
