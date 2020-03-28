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
    case types.SEARCH_RESULTS: {
      return {
        currentPage: "Results"
      }
    }
    default: return state;
  }
}

export default rootReducer;
