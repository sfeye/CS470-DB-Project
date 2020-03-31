import types from "../constants/action-types";

const initialState = {
  create: false,
};

function rootReducer(state = initialState, action) {
switch(action.type) {
    case types.CREATE_USER: {
        return {
        create: true
        }
    }
    case types.USER_CREATED: {
      return {
      create: false
      }
  }
    default: return state;
  }
}

export default rootReducer;
