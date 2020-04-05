import types from "../constants/action-types";

const initialState = {
  currentTab: "Student",
  currentPage: "Query"
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case types.STUDENT_TAB: {
      return {
        currentTab: "Student",
        currentPage: "Query"
      }
    }
    case types.LIBRARIAN_TAB: {
      return {
        currentTab: "Librarian",
        currentPage: "Query"
      }
    }
    case types.CHECKOUT_TAB: {
      return {
        currentTab: "Check Out",
        currentPage: "Query"
      }
    }
    case types.CHECKIN_TAB: {
      return {
        currentTab: "Check In",
        currentPage: "Query"
      }
    }
    case types.SEARCH_RESULTS: {
      return {
        currentTab: action.payload.prevTab,
        currentPage: "Results"
      }
    }
    default: return state;
  }
}

export default rootReducer;
